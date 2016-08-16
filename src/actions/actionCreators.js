export function addToCart(product) {
	return {
		type: 'ADD_TO_CART',
		product
	}
}

export function removeFromCart(id) {
	return {
		type: 'REMOVE_FROM_CART',
		id
	}
}

export function incrementProductQuantity(id) {
	return {
		type: 'INC_PRODUCT_QUANTITY',
		id
	}
}

export function decrementProductQuantity(id) {
	return {
		type: 'DEC_PRODUCT_QUANTITY',
		id
	}
}