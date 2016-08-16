import React from 'react';

class ProductItem extends React.Component {
	render () {
		let classesToAdd = "";
		if (this.props.isInCart) {
			classesToAdd += "glyphicon-minus";
		} else {
			classesToAdd += "glyphicon-plus";
		}
		let params = null;
		if (this.props.isInCart) {
			params = this.props.index;
		} else {
			params = {
				name: this.props.name,
				price: this.props.price
			}
		}
		return <a 
			href="#" 
			className={"list-group-item clearfix" + (this.props.isInCart ? "disabled" : "")} 
			onClick={(e) => {
				e.preventDefault();
			}}>
  			{this.props.name}
			<span className="pull-right">
				<span className="badge">${this.props.price}</span>&nbsp;
				<button 
					className="btn btn-sm btn-primary" 
					onClick={this.props.doSomethingInCart.bind(this, params, this.props.index)}>
				  	<span className={"glyphicon " + classesToAdd}></span>
				</button>
			</span>
	    </a>
	}
}

export default ProductItem;