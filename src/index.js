import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './assets';

import { App } from './components';
import configureStore from './data-layer/store';
import rootSaga from './data-layer/saga';
import localStorage from './data-layer/localStorage';
import * as constants from './constants';
import * as utils from './utils';
import actions from './data-layer/actions';

const { userActions, cartActions } = actions;
const { NBEVERAGES_TOKEN, NBEVERAGES_SHOPPING_CART } = constants;

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	middlewares: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const token = localStorage.getItem(NBEVERAGES_TOKEN);
const shoppingCart = localStorage.getItem(NBEVERAGES_SHOPPING_CART);

if (token) {
	const decoded = utils.decodeJwtToken(token);
	const currentTime = Date.now() / 1000;

	if (decoded.exp < currentTime) {
		localStorage.removeItem(NBEVERAGES_TOKEN);
	} else {
		store.dispatch(
			userActions.userLoginSucceded({ user: { ...decoded } }),
		);
	}
}

if (shoppingCart) {
	store.dispatch(
		cartActions.setShoppingCart(shoppingCart),
	);
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'),
);
