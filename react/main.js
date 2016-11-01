import 'babel-polyfill';
var React = require('react');
var ReactDOM = require('react-dom');
<<<<<<< HEAD
import { Router, hashHistory } from 'react-router';
=======
var ReactRouter = require('react-router');
var Navbar = require('./navbar.js');
var Frontpage = require('./components/frontpage.js');    //includes the different classes to be used.
var Profile = require('./components/profile.js');
var Thread = require('./thread.js');
var all_posts = require('./posts.js');
import users from './users';
>>>>>>> reconstruct-code

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import routes from './routes';

var store = createStore(rootReducer);

<<<<<<< HEAD
=======
var ProfileHandler = React.createClass({    //Profilehandler, to make it possible to send current hash as parameter
  var user = users.filter(function( obj ) {   // Finds the right user matching hash
      return obj.userid == this.props.params.userId;
    })[0];
  render: function() {
    return(<Profile hash={this.props.params.userId} user={user} />);
  }
});
>>>>>>> reconstruct-code

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById('container')
);
