import 'babel-polyfill';
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import routes from './routes';

var store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById('container')
);
