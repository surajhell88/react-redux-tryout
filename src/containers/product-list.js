import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActionCreators';
import { decrementProductQuantity } from '../actions/productActionCreators';
import ProductList from '../components/product/list';

function mapStateToProps(state) {
	return {
		listOfProducts: state.products.items,
		isFetchingProducts: state.products.isFetchingProducts,
		errorWhileFetching: state.products.errorWhileFetching
	};
};

function mapDispatchToProps(dispatch) {
	return {
		addToCartHandler: (product) => {
			dispatch(addToCart(product));
			dispatch(decrementProductQuantity(product.id));
		}
	};
};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(ProductList);
