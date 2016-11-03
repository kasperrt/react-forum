import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NavbarContainer from './containers/NavbarContainer.js';
//var Frontpage = require('./frontpage.js');    //includes the different classes to be used.
import FrontpageContainer from './containers/FrontpageContainer.js';
import ProfileContainer from './containers/ProfileContainer.js';
import ThreadContainer from './containers/ThreadContainer.js';
import NotFound from './components/NotFound.js';
import SearchContainer from './containers/SearchContainer';

var App = React.createClass({         //"Top-level" class, contains Navbar and every element being sent into it
  render: function() {
    return (
      <div>
        <NavbarContainer currentUserId="u1" />
        {this.props.children}
      </div>
    )
  }
});

module.exports = (
    <Route>
      <Route path="/" component={App}>
        <IndexRoute component={FrontpageContainer} />
      </Route>
      <Route path="/_=_" component={App}>
        <IndexRoute component={FrontpageContainer} />
      </Route>
      <Route path="/404" component={App}>
        <IndexRoute component={NotFound} />
      </Route>
      <Route path="/search/:query" component={App} >
        <IndexRoute component={SearchContainer} />
      </Route>
      <Route path="/posts/:post_hash" component={App} >
        <IndexRoute component={ThreadContainer} />
      </Route>
      <Route path="/user" component={App} >
        <IndexRoute component={ProfileContainer} />
      </Route>
      <Route path="/user/:userId" component={App} >
        <IndexRoute component={ProfileContainer} />
      </Route>
    </Route>
);
