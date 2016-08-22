import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root'
import products from './data/products';
import cart from './data/cart';

import { fetchProducts } from './actions/productActionCreators';

const store = createStore(rootReducer, {
	products,
	cart
}, applyMiddleware(thunk));

store.dispatch(fetchProducts());

export const history = syncHistoryWithStore(hashHistory, store);

export default store;