import expect from 'expect';
import { addToCart, removeFromCart } from '../../src/actions/cartActionCreators.js';

describe('Action Creators', () => {
  	describe('addToCart',()=> {
    	it('should create an action to add a product', () => {
	    	const product = {
	    		id: 1,
	    		name: 'Samsung Test S3'
	    	};
			const expected = {
				type: 'ADD_TO_CART',
				product
			};
			const actual = addToCart(product);
			expect(actual).toEqual(expected);
    	});
  	});
	describe('removeFromCart',()=> {
	    it('should create an action to remove a product', () => {
			const id = 1;
			const expected = {
				type: 'REMOVE_FROM_CART',
				id
			};
			const actual = removeFromCart(id);
			expect(actual).toEqual(expected);
	    });
  	});
})
