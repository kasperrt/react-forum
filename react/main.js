var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Navbar = require('./navbar.js');
var Frontpage = require('./frontpage.js');
var Profile = require('./profile.js');
var Thread = require('./thread.js');
var all_posts = require('./posts.js');

var PostsHandler = React.createClass({
  render: function() {
    return(<Frontpage posts={all_posts} />);
  }
});

var ThreadHandler = React.createClass({
  render: function() {
    return(<Thread posts={all_posts} hash={this.props.params.post_hash} />);
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
});


ReactDOM.render(
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path="/" component={App}>
      <ReactRouter.IndexRoute component={PostsHandler} />
      <ReactRouter.Route path="/posts/:post_hash" component={ThreadHandler}>
      </ReactRouter.Route>
    </ReactRouter.Route>
    <ReactRouter.Route path="/profile" component={App}>
      <ReactRouter.IndexRoute component={Profile} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('container')
);
