// main.js

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Frontpage = require('./frontpage.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        nav shit
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
  </ReactRouter.Router>,
  document.getElementById('container')
);
