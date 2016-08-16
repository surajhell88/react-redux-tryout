import React from 'react';

import ProductItem from './item';

class ProductCart extends React.Component {
	render() {
		var productItems = this.props.cart.map((product, index) => {
			return (
				<ProductItem key={index} index={index} {...product} doSomethingInCart={this.props.removeFromCart} removeButton={true}/>
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