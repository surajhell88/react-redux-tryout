function items(state = [], action) {
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
			if (state[i].quantity > 0) {
				return [
					...state.slice(0, i),
					{...state[i], quantity: state[i].quantity - 1 },
					...state.slice(i + 1)
				];
			}
			return state;
		default:
			return state;
	}
}

function products(state = {}, action) {
	let i = -1;
	switch (action.type) {
		case 'INC_PRODUCT_QUANTITY':
		case 'DEC_PRODUCT_QUANTITY':
			return {
				...state,
				items: items(state.items, action)
			};
		case 'TOGGLE_FETCHING_PRODUCTS':
			return {
				...state,
				isFetchingProducts: action.isFetching
			}
		case 'TOGGLE_FETCHING_ERROR':
			return {
				...state,
				errorWhileFetching: action.isErrorFetching
			}
		case 'RECIEVED_PRODUCTS':
			return {
				...state,
				items: action.products
			}
		default:
			return state;
	}
}

export default products;