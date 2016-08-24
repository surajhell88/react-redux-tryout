import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import CartList from '../../src/components/product/cart';
import CartListItem from '../../src/components/product/cart-item';

const cartItems = [
        {"id":1,"name":"Samsung Note 7","price":489,"quantity":5},
        {"id":2,"name":"LG G4","price":329,"quantity":8}
    ],
    totalCartCost = 0;

function setup(cartItems, totalCartCost) {
    const props = {
        cartItems,
        totalCartCost,
        cartRemovalHandler: () => {}
    };
    const enzymeWrapper = shallow(<CartList {...props} />)
    return {
        props,
        enzymeWrapper
    };
};

describe('CartList Component', () => {
    it('should render no items in cart', () => {
        const { enzymeWrapper } = setup([], totalCartCost);
        expect(enzymeWrapper.find('div.cart-empty').length).toBe(1);
    });

    it('should render total cost', () => {
        const { enzymeWrapper } = setup(cartItems, 20);
        expect(enzymeWrapper.find('span.total-cart-cost').text()).toBe('$' + 20);
    });

    it('should render cart items', () => {
        const { enzymeWrapper } = setup(cartItems, 20);
        const cartListItem = enzymeWrapper.find(CartListItem);
        expect(cartListItem.length).toBe(2);
    });
});
