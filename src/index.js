import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
	thunk,
	routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.devToolsExtension;
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

const store = createStore(
	reducers,
	initialState,
	composedEnhancers
);

ReactDOM.render(
	<Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
