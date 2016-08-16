import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers/root'
import products from './data/products';
import cart from './data/cart';

const store = createStore(rootReducer, {
	products,
	cart
});

export const history = syncHistoryWithStore(hashHistory, store);

export default store;