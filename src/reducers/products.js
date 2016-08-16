function products(state = [], action) {
	switch (action.type) {
		case 'TOGGLE_IN_CART':
			const i = action.index;
			return [
				...state.slice(0, i),
				{...state[i], isInCart: !state[i].isInCart },
				...state.slice(i + 1)
			];
		default:
			return state;
	}
}

export default products;