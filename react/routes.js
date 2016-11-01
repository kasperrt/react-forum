import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NavbarContainer from './containers/NavbarContainer.js';
//var Frontpage = require('./frontpage.js');    //includes the different classes to be used.
import FrontpageContainer from './components/frontpage.js';
import ProfileContainer from './containers/ProfileContainer.js';
import ThreadContainer from './containers/ThreadContainer.js';
var all_posts = require('./posts.js');
var all_users = require('./users.js');

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

var PostsHandler = React.createClass({    //Posthandler, to make it possible to add posts as input to frontpage
  render: function() {
    return(<FrontpageContainer posts={all_posts} all_users={all_users} />);    //Frontpage being rendered, with all posts as parameter
  }
});

var ThreadHandler = React.createClass({   //Threadhandler, to make it possible to add posts as input to threads, and the current hash
  render: function() {
    return(<ThreadContainer posts={all_posts} hash={this.props.params.post_hash} />);
  }
});

var ProfileHandler = React.createClass({    //Profilehandler, to make it possible to send current hash as parameter
  render: function() {
    return(<ProfileContainer hash={this.props.params.userId} />);
  }
});

module.exports = (
    <Route>
      <Route path="/" component={App}>
        <IndexRoute component={PostsHandler} />
      </Route>
      <Route path="/posts/:post_hash" component={App} >
        <IndexRoute component={ThreadHandler} />
      </Route>
      <Route path="/user/:userId" component={App} >
        <IndexRoute component={ProfileHandler} />
      </Route>
    </Route>
);
