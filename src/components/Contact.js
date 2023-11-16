import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const ORDER_API = `http://203.171.20.210:8080/devcamp-pizza365/orders/`;
const VOUCHER_API = `http://203.171.20.210:8080/devcamp-pizza365/voucher_detail/`;

function ContactSection() {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [discountPercent, setDiscountPercent] = useState(0);

	const [phone, setPhone] = useState(Number);
	const [address, setAddress] = useState('');
	const [message, setMessage] = useState('');
	const [voucher, setVoucher] = useState('');
	const [errors, setErrors] = useState({});

	const checkVoucherCode = async (voucherInput, newErrorParam) => {
		try {
			const res = await fetch(`${VOUCHER_API}${voucherInput}`);
			const data = await res.json();
			setDiscountPercent(Number(data.phanTramGiamGia));
		} catch (error) {
			newErrorParam.voucher = 'Invalid Voucher Code';
		}
	};

	async function handleSubmitForm(e) {
		e.preventDefault();

		let newError = {};

		if (!fullname) {
			newError.fullname = 'Fullname is required!';
		}

		if (!email) {
			newError.email = 'Email is required!';
		} else if (!validateEmail(email)) {
			newError.email = 'Invalid Email!';
		}

		if (!phone) {
			newError.phone = 'Phone Number is required!';
		} else if (!validatePhoneNumber(phone)) {
			newError.phone = 'Invalid Phone Number!';
		}

		if (!address) {
			newError.address = 'Address is required!';
		}

		if (!message) {
			newError.message = 'Message is required!';
		}

		// Check Voucher
		if (voucher) {
			await checkVoucherCode(voucher, newError);
		}

		setErrors(newError);
	}

	return (
		<section
			className='contact-section'
			id='contact'>
			<Container>
				<div className='title-section'>
					<h2>Thông tin đơn hàng</h2>
				</div>
				<form
					className='form-contact'
					onSubmit={handleSubmitForm}>
					<div className='form-group'>
						<TextField
							fullWidth
							placeholder='Họ và tên'
							type='text'
							size='small'
							onChange={(e) => setFullname(e.target.value.trim())}
							error={errors.fullname}
							helperText={errors.fullname}
						/>
					</div>

					<div className='form-group'>
						<TextField
							fullWidth
							placeholder='Email'
							type='text'
							size='small'
							onChange={(e) => setEmail(e.target.value.trim())}
							error={errors.email}
							helperText={errors.email}
						/>
					</div>

					<div className='form-group'>
						<TextField
							fullWidth
							placeholder='Điện thoại'
							type='text'
							size='small'
							onChange={(e) => setPhone(e.target.value.trim())}
							error={errors.phone}
							helperText={errors.phone}
						/>
					</div>

					<div className='form-group'>
						<TextField
							fullWidth
							placeholder='Địa chỉ'
							type='text'
							size='small'
							onChange={(e) => setAddress(e.target.value.trim())}
							error={errors.address}
							helperText={errors.address}
						/>
					</div>

					<div className='form-group'>
						<TextField
							fullWidth
							placeholder='Lời nhắn'
							type='text'
							size='small'
							onChange={(e) => setMessage(e.target.value.trim())}
							error={errors.message}
							helperText={errors.message}
						/>
					</div>

					<div className='form-group'>
						<TextField
							fullWidth
							placeholder='Mã voucher (Voucher ID)'
							type='text'
							size='small'
							onChange={(e) => setVoucher(e.target.value.trim())}
							error={errors.voucher}
							helperText={errors.voucher}
						/>
					</div>
					<Button
						type='submit'
						variant='contained'
						fullWidth>
						Kiểm tra đơn
					</Button>
				</form>
			</Container>
		</section>
	);
}

const validateEmail = (email) => {
	const emailPattern = /\S+@\S+\.\S+/;
	return emailPattern.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
	const phoneNumberPattern = /^0\d{8,10}$/;
	return phoneNumberPattern.test(phoneNumber);
};

export default ContactSection;
