import hawaiPizza from '.././images/pizza_type_hawai.jpg';
import seaPizza from '.././images/pizza_type_hai_san.jpg';
import baconPizza from '.././images/pizza_type_thit_nuong.jpg';
import {
	SELECT_DRINK,
	SELECT_PIZZA_COMBO,
	SELECT_PIZZA_TYPE,
} from '../constants/pizzaConstants';

const initialState = {
	pizzaComboList: [
		{
			kichCo: 'S',
			name: 'Small',
			duongKinh: '20 cm',
			suon: 2,
			salad: '200 gr',
			soLuongNuoc: 2,
			donGia: 150000,
			isSelected: false,
		},
		{
			kichCo: 'M',
			name: 'Medium',
			duongKinh: '25 cm',
			suon: 4,
			salad: '300 gr',
			soLuongNuoc: 3,
			donGia: 200000,
			isSelected: false,
		},
		{
			kichCo: 'L',
			name: 'Large',
			duongKinh: '30 cm',
			suon: 8,
			salad: '500 gr',
			soLuongNuoc: 4,
			donGia: 250000,
			isSelected: false,
		},
	],

	pizzaTypeList: [
		{
			loaiPizza: 'Pizza Hawai',
			description: 'Món ăn thanh đạm',
			subdescription:
				'Hãy thưởng thức món ăn với phong cách Alo Ha đến từ Hawai.',
			imageSrc: hawaiPizza,
			isSelected: false,
		},
		{
			loaiPizza: 'Pizza Hải Sản',
			description: 'Món ăn đến từ biển',
			subdescription:
				'Bạn đã thử pizza được chế biến từ nguyên liệu hải sản chưa?',
			imageSrc: seaPizza,
			isSelected: false,
		},
		{
			loaiPizza: 'Pizza Bacon',
			description: 'Món ăn đặc biệt',
			subdescription: 'Được chế biến từ thịt bacon. Mang đến hương vị mới lạ.',
			imageSrc: baconPizza,
			isSelected: false,
		},
	],
	idLoaiNuocUong: '',

	formContact: {
		kichCo: '',
		duongKinh: '',
		suon: '',
		salad: '',
		loaiPizza: '',
		idVourcher: '',
		idLoaiNuocUong: '',
		soLuongNuoc: '',
		hoTen: '',
		thanhTien: '',
		email: '',
		soDienThoai: '',
		diaChi: '',
		loiNhan: '',
	},
};

const pizzaReducers = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_PIZZA_TYPE:
			const updatedPizzaTypeList = state.pizzaTypeList.map((pizza) =>
				action.payload.loaiPizza === pizza.loaiPizza
					? { ...pizza, isSelected: true }
					: { ...pizza, isSelected: false },
			);

			// const updated

			return { ...state, pizzaTypeList: updatedPizzaTypeList };

		case SELECT_PIZZA_COMBO:
			const updatedPizzaSize = state.pizzaComboList.map((pizza) =>
				action.payload.name === pizza.name
					? { ...pizza, isSelected: true }
					: { ...pizza, isSelected: false },
			);
			return { ...state, pizzaComboList: updatedPizzaSize };

		case SELECT_DRINK:
			console.log(action.payload.drink);
			return { ...state, drink: action.payload.drink };

		default: {
			return state;
		}
	}
};

export default pizzaReducers;
