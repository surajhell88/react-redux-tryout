import React from 'react';
import { Link } from 'react-router';

import CartItem from './cart-item';

const ProductCart = ({ cartItems, totalCartCost, cartRemovalHandler }) => {
	let renderProducts = null;
	if (cartItems.length == 0) {
		renderProducts = <div className="text-center"><h3>No items in Cart, You can buy them from our <Link to="/products">Product List</Link></h3></div>
	} else {
		renderProducts = cartItems.map((product, i) => {
			return (
				<CartItem key={i} product={product} removeFromCart={cartRemovalHandler} />
			);
		});
	}
	return <div className="container">
		<div className="list-group">
			{renderProducts}
		</div>
		<hr/>
		<div className="row">
		    <div className="col-sm-6"><h2>Total cost</h2></div>
		    <div className="col-sm-6"><span className="pull-right"><h2>${totalCartCost}</h2></span></div>
	  	</div>
		<hr/>
	</div>
};

ProductCart.propTypes = {
	cartItems: React.PropTypes.array.isRequired,
	totalCartCost: React.PropTypes.number.isRequired,
	cartRemovalHandler: React.PropTypes.func.isRequired
}

export default ProductCart;