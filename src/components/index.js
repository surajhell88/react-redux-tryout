import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import { buildRoutes } from './routes';
import store from '../store';

import '../../lib/bootstrap/css/bootstrap.min.css';
import '../styles/app.css'

const renderThis = (
	<Provider store={store}>
		{buildRoutes()}
	</Provider>
)

export function startApp() {
	render(renderThis, document.getElementById('root'));
}