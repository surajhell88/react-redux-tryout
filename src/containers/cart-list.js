import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { removeFromCart } from '../actions/cartActionCreators';
import { incrementProductQuantity } from '../actions/productActionCreators';
import CartList from '../components/product/cart';

function mapStateToProps(state) {
	return {
		cartItems: state.cart,
		totalCartCost: _.reduce(state.cart, function (sum, product) {
			return sum + (product.quantity * product.price);
		}, 0)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		cartRemovalHandler: (id) => {
			dispatch(removeFromCart(id));
			dispatch(incrementProductQuantity(id));
		}
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(CartList);
