import React from 'react';

import ProductListItem from './list-item';

const ProductList = ({ products, addToCartHandler }) => {
	let cartItems = null;
	if (products.isFetchingProducts) {
		cartItems = <div className="text-center"><h3>Fetching Product List...</h3></div>
	} else if(products.errorWhileFetching) {
		cartItems = <div className="text-center text-danger"><h3>Is there any problem with your Internet Connectivity?</h3></div>
	} else {
		if (products.items.length == 0) {
			cartItems = <div className="text-center text-info"><h3>Oops, we are sold out!</h3></div>
		} else {
			cartItems = products.items.map((product, i) => {
				return (
					<ProductListItem key={i} product={product} addToCart={addToCartHandler}  />
				);
			});
		}
	}
	return <div className="container">
		<div className="list-group">
			{cartItems}
		</div>
	</div>
}

ProductList.propTypes = {
	products: React.PropTypes.object.isRequired,
	addToCartHandler: React.PropTypes.func.isRequired
}

export default ProductList;