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

const jsonAPIWithProducts = 'https://api.myjson.com/bins/406sj',
	jsonAPIWithoutProducts = 'https://api.myjson.com/bins/470e';

export function fetchProducts() {
	return function (dispatch) {
		dispatch(toggleFetchingProducts(true));
		return fetch(jsonAPIWithProducts)
			.then(response => response.json())
			.then(json => {
				dispatch(toggleFetchingProducts(false));
				let products = [];
				if (json.products) {
					products = json.products;
				} else {
					dispatch(toggleErrorFetchingProducts(true));
				}
				dispatch(recievedProducts(products));
			})
	}
}