// main.js

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Home = require('./other.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home Site</h1>
        <li><ReactRouter.Link to="/test">test</ReactRouter.Link></li>
      </div>
    )
  }
});

var Stuff = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Test Site</h1>
        <li><ReactRouter.Link to="/">Home</ReactRouter.Link></li>
      </div>
    )
  }
});

ReactDOM.render(
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path="/" component={App}>
      <ReactRouter.IndexRoute component={Home} />
      <ReactRouter.Route path="test" component={Stuff} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('container')
);
