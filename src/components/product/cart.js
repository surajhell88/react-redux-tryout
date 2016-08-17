import React from 'react';

import CartItem from './cart-item';

class ProductCart extends React.Component {
	cartRemovalHandler(id) {
		this.props.removeFromCart(id);
		this.props.incrementProductQuantity(id);
	}
	render() {
		var productItems = this.props.cart.map((product, i) => {
			return (
				<CartItem key={i} {...product} removeFromCart={this.cartRemovalHandler.bind(this)} />
			);
		});
		return <div className="container">
			<div className="list-group">
				{productItems}
			</div>
		</div>
	}
}

export default ProductCart;