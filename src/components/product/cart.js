import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import CartItem from './cart-item';

class ProductCart extends React.Component {
	cartRemovalHandler(id) {
		this.props.removeFromCart(id);
		this.props.incrementProductQuantity(id);
	}
	render() {
		let productItems = [];
		if (this.props.cart.length == 0) {
			productItems = (
				<div className="text-center"><h3>No items in Cart, You can buy them from our <Link to="/products">Product List</Link></h3></div>
			);
		} else {
			productItems = this.props.cart.map((product, i) => {
				return (
					<CartItem key={i} {...product} removeFromCart={this.cartRemovalHandler.bind(this)} />
				);
			});
		}
		let totalCartCost = _.reduce(this.props.cart, function (sum, product) {
			return sum + (product.quantity * product.price);
		}, 0);
		return <div className="container">
			<div className="list-group">
				{productItems}
			</div>
			<hr/>
			<div className="row">
			    <div className="col-sm-6"><h2>Total cost</h2></div>
			    <div className="col-sm-6"><span className="pull-right"><h2>${totalCartCost}</h2></span></div>
		  	</div>
			<hr/>
		</div>
	}
}

export default ProductCart;