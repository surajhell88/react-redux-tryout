import React from 'react';

class ProductItem extends React.Component {
	render () {
		return <a 
			href="#" 
			className="list-group-item clearfix" 
			onClick={(e) => {
				e.preventDefault();
			}}>
  			{this.props.name}
			<span className="pull-right">
				<span className="badge">${this.props.price}</span>&nbsp;
				<span className="badge" title="Quantity in Cart">{this.props.quantity}</span>&nbsp;
				<button 
					className="btn btn-sm btn-primary" 
					onClick={this.props.removeFromCart.bind(this, this.props.id)}>
				  	<span className="glyphicon glyphicon-minus"></span>
				</button>
			</span>
	    </a>
	}
}

export default ProductItem;