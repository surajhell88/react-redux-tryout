import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import 'babel-polyfill';

import Main from './main';
import ProductList from './product/list';
import ProductCart from './product/cart';
import store, { history } from '../store';

import '../../lib/bootstrap/css/bootstrap.min.css';
import '../styles/app.css'

function buildRoutes() {
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

const renderThis = (
	<Provider store={store}>
		{buildRoutes()}
	</Provider>
)

export function startApp() {
	render(renderThis, document.getElementById('root'));
}