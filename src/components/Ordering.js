import React, { useEffect, useState } from 'react';

import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
	SELECT_DRINK,
	SELECT_PIZZA_COMBO,
	SELECT_PIZZA_TYPE,
} from '../constants/pizzaConstants';

function OrderingSection() {
	const dispatch = useDispatch();
	const { pizzaTypeList, pizzaComboList } = useSelector(
		(reduxData) => reduxData.pizzaReducers,
	);

	function handleSelectCombo(name) {
		dispatch({
			type: SELECT_PIZZA_COMBO,
			payload: { name },
		});
	}

	function handleSelectType(loaiPizza) {
		dispatch({
			type: SELECT_PIZZA_TYPE,
			payload: { loaiPizza },
		});
	}

	function handleSelectDrink(drink) {
		dispatch({
			type: SELECT_DRINK,
			payload: { drink },
		});
	}

	return (
		<section
			className='section-combo'
			id='combo'>
			<PizzaCombo
				onSelectCombo={handleSelectCombo}
				pizzaComboList={pizzaComboList}
			/>
			<PizzaType
				onSelectType={handleSelectType}
				pizzaTypeList={pizzaTypeList}
			/>
			<Drinks onSelectDrink={handleSelectDrink} />
		</section>
	);
}

function PizzaCombo({ onSelectCombo, pizzaComboList }) {
	return (
		<div className='container'>
			<div className='title-section'>
				<h2>Menu combo Pizza 365</h2>
				<p>Hãy chọn combo phù hợp với bạn</p>
			</div>
			<div className='pizza-combo-container'>
				{pizzaComboList.map((pizza, i) => (
					<PizzaComboCard
						onSelectCombo={onSelectCombo}
						key={i}
						pizza={pizza}
					/>
				))}
			</div>
		</div>
	);
}

function PizzaComboCard({
	pizza: { size, name, duongKinh, nuocNgot, salad, suon, donGia, isSelected },
	onSelectCombo,
}) {
	return (
		<div className='card'>
			<div className='card-title'>
				<h3>
					{size} ({name} size)
				</h3>
			</div>
			<div className='card-body'>
				<ul>
					<li>
						Đường kính <span>{duongKinh}</span>
					</li>
					<li>
						Sườn nướng <span>{suon}</span>
					</li>
					<li>
						Salad <span>{salad}</span>
					</li>
					<li>
						Nước ngọt <span>{nuocNgot}</span>
					</li>
				</ul>
				<h4 className='price'>
					VND <br />
					{donGia.toLocaleString()}
				</h4>
			</div>
			<div className='card-footer'>
				<Button
					onClick={() => onSelectCombo(name)}
					variant='contained'
					color={isSelected ? 'warning' : 'primary'}
					fullWidth>
					Chọn
				</Button>
			</div>
		</div>
	);
}

function PizzaType({ pizzaTypeList, onSelectType }) {
	return (
		<div className='container'>
			<div
				className='title-section'
				id='type'>
				<h2>Chọn loại pizza</h2>
			</div>

			<div className='pizza-type-container'>
				{pizzaTypeList.map((pizza, i) => (
					<PizzaTypeCard
						onSelectType={onSelectType}
						pizza={pizza}
						key={i}
					/>
				))}
			</div>
		</div>
	);
}
const DRINK_API = `http://203.171.20.210:8080/devcamp-pizza365/drinks`;
function Drinks({ onSelectDrink }) {
	const [drink, setDrink] = useState([]);
	const [selectedDrink, setSelectedDrink] = useState(''); // Initialize the selected drink

	useEffect(() => {
		const getDrink = async () => {
			try {
				const res = await fetch(DRINK_API);
				const data = await res.json();
				setDrink(data);
			} catch (error) {
				console.log(error);
			}
		};
		getDrink();
	}, []);

	const handleDrinkChange = (event) => {
		const drink = event.target.value;
		setSelectedDrink(drink);
		onSelectDrink(drink);
	};

	return (
		<Box
			sx={{
				maxWidth: '400px',
				gap: '1rem',
				margin: '4rem auto 0 auto',
				px: 2,
			}}>
			<FormControl fullWidth>
				<InputLabel id='select-drink'>Select a Drink</InputLabel>
				<Select
					labelId='select-drink'
					value={selectedDrink} // Set the value to the selectedDrink state
					onChange={handleDrinkChange} // Handle change event
					label='Select a Drink'
					fullWidth>
					{drink.map((drink) => (
						<MenuItem
							key={drink.maNuocUong}
							value={drink.maNuocUong}>
							{drink.tenNuocUong}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

function PizzaTypeCard({ pizza, onSelectType }) {
	return (
		<div className='card'>
			<div className='card-img-top'>
				<img
					src={pizza.imageSrc}
					alt={pizza.name}
				/>
			</div>
			<div className='card-body'>
				<h3>{pizza.name}</h3>
				<p className='sum'>{pizza.description}</p>
				<p>{pizza.subdescription}</p>
				<Button
					variant='contained'
					onClick={() => onSelectType(pizza.loaiPizza)}
					color={pizza.isSelected ? 'warning' : 'primary'}
					sx={{ mt: 3 }}
					fullWidth>
					Chọn
				</Button>
			</div>
		</div>
	);
}

export default OrderingSection;
