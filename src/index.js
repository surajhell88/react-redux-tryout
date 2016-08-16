import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import 'babel-polyfill';

import Main from './components/main';
import ProductList from './components/product/list';
import ProductCart from './components/product/cart';
import store, { history } from './store';

import '../lib/bootstrap/css/bootstrap.min.css';
import './styles/app.css'

const renderThis = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRedirect to="/products" />
        		<Route path="products" component={ProductList}></Route>
        		<Route path="cart" component={ProductCart}></Route>
	      	</Route>
		</Router>
	</Provider>
)

render(renderThis, document.getElementById('root'));