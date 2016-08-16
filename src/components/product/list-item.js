import React from 'react';

class ProductItem extends React.Component {
	render () {
		let getProductDetails = function ({id, name, price}) {
			return { id, name, price, quantity: 1 };
		}
		const productDetails = getProductDetails(this.props);
		return <a 
			href="#" 
			className="list-group-item clearfix" 
			onClick={(e) => {
				e.preventDefault();
			}}>
  			{this.props.name}
			<span className="pull-right">
				<span className="badge">${this.props.price}</span>&nbsp;
				<span className="badge">{this.props.quantity} left in stock</span>&nbsp;
				<button 
					className="btn btn-sm btn-primary" 
					onClick={this.props.addToCart.bind(this, productDetails)}>
				  	<span className="glyphicon glyphicon-plus"></span>
				</button>
			</span>
	    </a>
	}
}

export default ProductItem;