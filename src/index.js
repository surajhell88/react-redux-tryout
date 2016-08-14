import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './reducers/root';

const renderThis = (
	<Provider store={store}>
		<App />
	</Provider>
)

render(renderThis, document.getElementById('root'));