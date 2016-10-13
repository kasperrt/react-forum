var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Navbar = require('./navbar.js');
var Frontpage = require('./frontpage.js');
var Thread = require('./thread.js');

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
      <ReactRouter.IndexRoute component={Frontpage} />
      <ReactRouter.Route path="/posts/:post_hash" component={Thread}>
      </ReactRouter.Route>
    </ReactRouter.Route>
    <ReactRouter.Route path="posts/post_hash1" component={App}>
      <ReactRouter.IndexRoute component={Thread} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('container')
);
