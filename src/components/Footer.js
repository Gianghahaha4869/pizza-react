import { Button } from '@mui/material';
import React from 'react';
import {
	RiArrowUpLine,
	RiFacebookCircleLine,
	RiInstagramLine,
	RiTwitterLine,
	RiMessengerLine,
} from 'react-icons/ri';

const Footer = () => {
	return (
		<footer>
			<h4>Footer</h4>
			<Button
				startIcon={<RiArrowUpLine />}
				variant='contained'
				sx={{ textTransform: 'capitalize', my: 2 }}>
				To the top
			</Button>
			<div className='social-container'>
				<RiFacebookCircleLine />
				<RiInstagramLine />
				<RiTwitterLine />
				<RiMessengerLine />
			</div>
		</footer>
	);
};

export default Footer;
