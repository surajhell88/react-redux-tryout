import expect from 'expect';
import productReducer from '../../src/reducers/products';

describe('Products reducer', () => {
	it('should return the initial state', () => {
		expect(
			productReducer(undefined, {})
		).toEqual({});
	});

	let id = 1;
	let product = {
		id: id,
		name: 'TEST',
		quantity: 1
	};
	let cart = {
		isFetchingProducts: false,
		errorWhileFetching: false,
		items: [ product ]
	}

  	it('should handle INC_PRODUCT_QUANTITY', () => {
  		// reducer increments product's quantity by 1
		expect(
			productReducer(cart, {
				type: 'INC_PRODUCT_QUANTITY',
				id
			})
		).toEqual({
			...cart,
			items: [
				{
					...product,
					quantity: 2
				}
			]
		});
  	});

  	it('should handle DEC_PRODUCT_QUANTITY', () => {
  		// reducer decrements product's quantity by 1
		expect(
			productReducer({
				...cart,
				items: [
					{
						...product,
						quantity: 2
					}
				]
			}, {
				type: 'DEC_PRODUCT_QUANTITY',
				id
			})
		).toEqual({
			...cart,
			items: [
				{
					...product,
					quantity: 1
				}
			]
		});
  	});

  	it('should handle TOGGLE_FETCHING_PRODUCTS', () => {
  		// reducer toggles fetching flag to true
		expect(
			productReducer(cart, {
				type: 'TOGGLE_FETCHING_PRODUCTS',
				isFetching: true
			})
		).toEqual({
			...cart,
			isFetchingProducts: true
		});
  	});
  	
  	it('should handle TOGGLE_FETCHING_ERROR', () => {
  		// reducer toggles error fetching flag to true
		expect(
			productReducer(cart, {
				type: 'TOGGLE_FETCHING_ERROR',
				isErrorFetching: true
			})
		).toEqual({
			...cart,
			errorWhileFetching: true
		});
  	});

  	it('should handle RECIEVED_PRODUCTS', () => {
  		// reducer sets recireved products in items
		expect(
			productReducer({
				...cart,
				items: []
			}, {
				type: 'RECIEVED_PRODUCTS',
				products: [product]
			})
		).toEqual({
			...cart,
			items: [product]
		});
  	});

});
