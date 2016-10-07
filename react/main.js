// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <Comment author="Kasper">This is a poop</Comment>,
  document.getElementById('container')
);
