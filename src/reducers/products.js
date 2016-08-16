function products(state = [], action) {
	let i = -1;
	switch (action.type) {
		case 'INC_PRODUCT_QUANTITY':
			i = _.findIndex(state, function (item) {
				return item.id === action.id
			});
			if (i == -1) {
				return state;
			}
			return [
				...state.slice(0, i),
				{...state[i], quantity: state[i].quantity + 1 },
				...state.slice(i + 1)
			];
		case 'DEC_PRODUCT_QUANTITY':
			i = _.findIndex(state, function (item) {
				return item.id === action.id
			});
			if (i == -1) {
				return state;
			}
			if (state[i].quantity > 1) {
				return [
					...state.slice(0, i),
					{...state[i], quantity: state[i].quantity - 1 },
					...state.slice(i + 1)
				];
			}
			return [
				...state.slice(0, i),
				...state.slice(i + 1)
			];
			return state;
		default:
			return state;
	}
}

export default products;