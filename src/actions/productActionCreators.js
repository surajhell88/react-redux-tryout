import fetch from 'isomorphic-fetch';

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

export function toggleFetchingProducts(isFetching) {
	return {
		type: 'TOGGLE_FETCHING_PRODUCTS',
		isFetching
	}
}

export function toggleErrorFetchingProducts(isErrorFetching) {
	return {
		type: 'TOGGLE_FETCHING_ERROR',
		isErrorFetching
	}
}

export function recievedProducts(products) {
	return {
		type: 'RECIEVED_PRODUCTS',
		products
	}
}

export function fetchProducts() {
	return function (dispatch) {
		dispatch(toggleFetchingProducts(true));
		return fetch('https://api.myjson.com/bins/406sj')
			.then(response => response.json())
			.then(json => {
				dispatch(toggleFetchingProducts(false))
				dispatch(recievedProducts(json.products))
			})
	}
}