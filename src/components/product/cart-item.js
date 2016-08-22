import React from 'react';

const ProductItem = ({ product, removeFromCart }) => {
	return <a 
		href="#" 
		className="list-group-item clearfix" 
		onClick={(e) => {
			e.preventDefault();
		}}>
			{product.name}
		<span className="pull-right">
			<span className="badge">${product.price}</span>&nbsp;
			<span className="badge" title="Quantity in Cart">{product.quantity}</span>&nbsp;
			<button 
				className="btn btn-sm btn-primary" 
				onClick={(e) => {
					removeFromCart(product.id);
				}}>
			  	<span className="glyphicon glyphicon-minus"></span>
			</button>
		</span>
    </a>
};

ProductItem.propTypes = {
	product: React.PropTypes.object.isRequired,
	removeFromCart: React.PropTypes.func.isRequired
};

export default ProductItem;