import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';

import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from './Reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(
    appReducers,
    enhancer
    // compose(applyMiddleware(thunk),window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__())   
)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>    
    , document.getElementById('root'));
