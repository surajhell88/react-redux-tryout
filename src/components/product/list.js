import React from 'react';

import ProductListItem from './list-item';

const ProductList = ({ listOfProducts, addToCartHandler }) => {
	let cartItems = null;
	if (listOfProducts.length == 0) {
		cartItems = <div className="text-center"><h3>Fetching Product List...</h3></div>
	} else {
		cartItems = listOfProducts.map((product, i) => {
			return (
				<ProductListItem key={i} product={product} addToCart={addToCartHandler}  />
			);
		});
	}
	return <div className="container">
		<div className="list-group">
			{cartItems}
		</div>
	</div>
}

ProductList.propTypes = {
	listOfProducts: React.PropTypes.array.isRequired,
	addToCartHandler: React.PropTypes.func.isRequired
}

export default ProductList;