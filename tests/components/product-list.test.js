import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../../src/components/product/list';
import ProductListItem from '../../src/components/product/list-item';

const products = {
    isFetchingProducts: false,
    errorWhileFetching: false,
    items: [
        {"id":1,"name":"Samsung Note 7","price":489,"quantity":5},
        {"id":2,"name":"LG G4","price":329,"quantity":8}
    ]
};

function setup(products) {
    const props = {
        products,
        addToCartHandler: () => {}
    };
    const enzymeWrapper = shallow(<ProductList {...props} />)
    return {
        props,
        enzymeWrapper
    };
};

describe('ProductList Component', () => {
    it('should render fetching product list div', () => {
        const { enzymeWrapper } = setup({
            ...products,
            isFetchingProducts: true
        });
        expect(enzymeWrapper.find('div.fetching-product-list').length).toBe(1);
    });

    it('should render error fetching product list div', () => {
        const { enzymeWrapper } = setup({
            ...products,
            errorWhileFetching: true
        });
        expect(enzymeWrapper.find('div.product-list-fetch-error').length).toBe(1);
    });

    it('should render no product data div', () => {
        const { enzymeWrapper } = setup({
            ...products,
            items: []
        });
        expect(enzymeWrapper.find('div.no-product-data').length).toBe(1);
    });

    it('should render product list', () => {
        const { enzymeWrapper } = setup(products);
        const prodictListItem = enzymeWrapper.find(ProductListItem);
        expect(prodictListItem.length).toBe(2);
    })
});
