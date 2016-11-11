import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import routes from './containers/RouterContainer';

var store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById('container')
);
