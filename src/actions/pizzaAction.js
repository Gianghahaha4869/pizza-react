import { BUY_PRODUCT } from '../constants/productConstants';

export const buyProduct = (productName) => {
	return {
		type: BUY_PRODUCT,
		payload: {
			productName,
		},
	};
};
