import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import { history } from '../store';
import Main from './main';
import ProductList from './product/list';
import ProductCart from './product/cart';

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