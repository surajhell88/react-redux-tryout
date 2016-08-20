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