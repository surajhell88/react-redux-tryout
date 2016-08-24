import expect from 'expect';
import cartReducer from '../../src/reducers/cart';

describe('Cart reducer', () => {
	it('should return the initial state', () => {
		expect(
			cartReducer(undefined, {})
		).toEqual([]);
	});

	let id = 1;
	let product = {
		id: id,
		name: 'TEST',
		quantity: 1
	};

  	it('should handle ADD_TO_CART', () => {
  		// reducer adds product with quantity as 1
		expect(
			cartReducer([], {
				type: 'ADD_TO_CART',
				product
			})
		).toEqual([
			product
		]);
		// reducer updates the product with quantity as 2 because product is already inside store
		expect(
			cartReducer([
				product
			],{
				type: 'ADD_TO_CART',
				product
			})
		).toEqual([{
			...product,
			quantity: 2
		}]);
  	});

  	it('should handle REMOVE_FROM_CART', () => {
  		// reducer updates product quatity to 1 if before it was 2
		expect(
			cartReducer([{
				...product,
				quantity: 2
			}], {
				type: 'REMOVE_FROM_CART',
				id
			})
		).toEqual([{
			...product,
			quantity: 1
		}]);
		// reducer removes product when quantity is 1
		expect(
			cartReducer([
				product
			],{
				type: 'REMOVE_FROM_CART',
				id
			})
		).toEqual([]);
  	});
});