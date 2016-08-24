import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import CartListItem from '../../src/components/product/cart-item';

const product = {
    "id":1,
    "name":"Samsung Note 7",
    "price":489,
    "quantity":"5"
};

function setup(product) {
    const props = {
        product,
        removeFromCart: expect.createSpy()
    };
    const enzymeWrapper = shallow(<CartListItem {...props} />)
    return {
        props,
        enzymeWrapper
    };
};

describe('CartList Component', () => {
    it('should render cart item', () => {
        const { enzymeWrapper } = setup(product);
        expect(enzymeWrapper.find('span.cart-item-name').text()).toBe(product.name);
        expect(enzymeWrapper.find('span.cart-item-price').text()).toBe('$' + product.price);
        expect(enzymeWrapper.find('span.cart-item-quantity').text()).toBe(product.quantity);
    });

    it('should call removeFromCart', () => {
        const { enzymeWrapper, props } = setup(product);
        const removeButton = enzymeWrapper.find('button');
        removeButton.props().onClick('');
        expect(props.removeFromCart.calls.length).toBe(1)
    });
});
