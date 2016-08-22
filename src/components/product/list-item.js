import React from 'react';

const ProductItem = ({ product, addToCart }) => {
	return <a 
		href="#" 
		className={"list-group-item clearfix " + (product.quantity == 0 ? 'disabled' : '') } 
		onClick={(e) => {
			e.preventDefault();
		}}>
			{product.name}
		<span className="pull-right">
			<span className="badge">${product.price}</span>&nbsp;
			<span className="badge">{product.quantity} left in stock</span>&nbsp;
			<button 
				disabled={product.quantity == 0}
				className="btn btn-sm btn-primary" 
				onClick={(e) => {
					addToCart({ ...product, quantity: 1 });
				}}>
			  	<span className="glyphicon glyphicon-plus"></span>
			</button>
		</span>
    </a>
};

ProductItem.propTypes = {
	product: React.PropTypes.object.isRequired,
	addToCart: React.PropTypes.func.isRequired
};

export default ProductItem;