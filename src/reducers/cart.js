import _ from 'lodash';

function cart(state = [], action) {
	let i = -1;
	switch(action.type) {
		case 'ADD_TO_CART':
			i = _.findIndex(state, function (item) {
				return item.id === action.product.id
			});
			if (i === -1) { // if product is new to cart
				return state.concat(action.product);
			}
			// if product already exists in cart, increment quantity by 1
			return [
				...state.slice(0, i),
				{...state[i], quantity: state[i].quantity + 1 },
				...state.slice(i + 1)
			];
		case 'REMOVE_FROM_CART':
			i = _.findIndex(state, function (item) {
				return item.id === action.id
			});
			if (i === -1) { // if product is not in cart, return state
				return state;
			}
			if (state[i].quantity > 1) { // if product is in cart and quantity is more than 1, decrement quantity by 1
				return [
					...state.slice(0, i),
					{...state[i], quantity: state[i].quantity - 1 },
					...state.slice(i + 1)
				];
			}
			// if product is in cart and quantity is 1, remove the product from cart
			return [
				...state.slice(0, i),
				...state.slice(i + 1)
			];
		default:
			return state;
	}
}

export default cart;