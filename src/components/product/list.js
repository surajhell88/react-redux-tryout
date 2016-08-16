import React from 'react';

import ProductListItem from './list-item';

class ProductList extends React.Component {
	addToCartHandler(product) {
		this.props.addToCart(product);
		this.props.decrementProductQuantity(product.id);
	}
	render() {
		var cartItems = this.props.products.map((product, i) => {
			return (
				<ProductListItem key={i} {...product} addToCart={this.addToCartHandler.bind(this)}  />
			);
		});
		return <div className="container">
			<div className="list-group">
				{cartItems}
			</div>
		</div>
	}
}

export default ProductList;