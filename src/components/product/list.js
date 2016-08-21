import React from 'react';

import ProductListItem from './list-item';

class ProductList extends React.Component {
	addToCartHandler(product) {
		this.props.addToCart(product);
		this.props.decrementProductQuantity(product.id);
	}
	componentDidMount() {
		this.props.fetchProducts();
	}
	render() {
		if (this.props.products.isFetchingProducts) {
			return <div className="text-center"><h3>Fetching Products...</h3></div>
		}
		var cartItems = this.props.products.items.map((product, i) => {
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