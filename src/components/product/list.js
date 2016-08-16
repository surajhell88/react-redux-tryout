import React from 'react';

import ProductItem from './item';

class ProductList extends React.Component {
	addProductToCart(product, index) {
		this.props.addToCart(product);
		this.props.toggleIsInCart(index);
	}
	render() {
		var cartItems = this.props.products.map((product, index) => {
			return (
				<ProductItem key={index} index={index} {...product} doSomethingInCart={this.addProductToCart.bind(this)} addButton={true} />
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