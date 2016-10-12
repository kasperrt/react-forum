// main.js

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Navbar = require('./navbar.js');
var Frontpage = require('./frontpage.js');
var Profile = require('./profile.js');


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
    </ReactRouter.Route>
    <ReactRouter.Route path="/profile" component={App}>
      <ReactRouter.IndexRoute component={Profile} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('container')
);
