import React from 'react';

import ProductListItem from './list-item';

const ProductList = ({ listOfProducts, isFetchingProducts, errorWhileFetching, addToCartHandler }) => {
	let cartItems = null;
	if (isFetchingProducts) {
		cartItems = <div className="text-center"><h3>Fetching Product List...</h3></div>
	} else if(errorWhileFetching) {
		cartItems = <div className="text-center text-danger"><h3>Is there any problem with your Internet Connectivity?</h3></div>
	} else {
		if (listOfProducts.length == 0) {
			cartItems = <div className="text-center text-info"><h3>Oops, we are sold out!</h3></div>
		} else {
			cartItems = listOfProducts.map((product, i) => {
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
	listOfProducts: React.PropTypes.array.isRequired,
	isFetchingProducts: React.PropTypes.bool.isRequired,
	errorWhileFetching: React.PropTypes.bool.isRequired,
	addToCartHandler: React.PropTypes.func.isRequired
}

export default ProductList;