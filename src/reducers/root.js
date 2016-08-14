import { createStore } from 'redux';
// import { browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';

const rootReducer = function (state, action) {
	switch(action.type) {
		case 'SAY_HELLO':
			alert(state.someMessage + action.sentence);
			return state;
		default:
			return state;
	}
	return state;
}

const store = createStore(rootReducer, {
	someMessage: 'Hi, '
});

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;