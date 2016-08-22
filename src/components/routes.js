import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import { history } from '../store';

import Main from '../containers/main';
import ProductList from '../containers/product-list';
import ProductCart from '../containers/cart-list';

export function buildRoutes() {
	return (
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRedirect to="/products" />
        		<Route path="products" component={ProductList}></Route>
        		<Route path="cart" component={ProductCart}></Route>
	      	</Route>
		</Router>
	);
}