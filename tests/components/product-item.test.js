import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ProductListItem from '../../src/components/product/list-item';

const product = {
    "id":1,
    "name":"Samsung Note 7",
    "price":489,
    "quantity":"5"
};

function setup(product) {
    const props = {
        product,
        addToCart: expect.createSpy()
    };
    const enzymeWrapper = shallow(<ProductListItem {...props} />)
    return {
        props,
        enzymeWrapper
    };
};

describe('ProductListItem Component', () => {
    it('should render product item', () => {
        const { enzymeWrapper } = setup(product);
        expect(enzymeWrapper.find('span.product-item-name').text()).toBe(product.name);
        expect(enzymeWrapper.find('span.product-item-price').text()).toBe('$' + product.price);
        expect(enzymeWrapper.find('span.product-item-quantity').text()).toBe(product.quantity);
    });

    it('should call addToCart', () => {
        const { enzymeWrapper, props } = setup(product);
        const addButton = enzymeWrapper.find('button');
        addButton.props().onClick('');
        expect(props.addToCart.calls.length).toBe(1)
    });
});
