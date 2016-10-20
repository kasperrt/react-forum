var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Navbar = require('./navbar.js');
var Frontpage = require('./frontpage.js');    //includes the different classes to be used.
var Profile = require('./profile.js');
var Thread = require('./thread.js');
var all_posts = require('./posts.js');

var PostsHandler = React.createClass({    //Posthandler, to make it possible to add posts as input to frontpage
  render: function() {
    return(<Frontpage posts={all_posts} />);    //Frontpage being rendered, with all posts as parameter
  }
});

var ThreadHandler = React.createClass({   //Threadhandler, to make it possible to add posts as input to threads, and the current hash
  render: function() {
    return(<Thread posts={all_posts} hash={this.props.params.post_hash} />);
  }
});

var ProfileHandler = React.createClass({    //Profilehandler, to make it possible to send current hash as parameter
  render: function() {
    return(<Profile hash={this.props.params.userId} />);
  }
});

var App = React.createClass({         //"Top-level" class, contains Navbar and every element being sent into it
  render: function() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
});


ReactDOM.render(        //Function for rendering everything to the DOM
  <ReactRouter.Router history={ReactRouter.hashHistory}>    //Setting up the ReactRouter for link handling.
    <ReactRouter.Route path="/" component={App}>            //Router for path /, and adds App as the handler for that path
      <ReactRouter.IndexRoute component={PostsHandler} />   //Setting PostHandler as component for the index of path /
      <ReactRouter.Route path="/posts/:post_hash" component={ThreadHandler}>    //Defines that the path /posts/:post_hash with parameter being sent in with URL
      </ReactRouter.Route>
      <ReactRouter.Route path="/user/:userId" component={ProfileHandler}>       //Defines that the path /user/:userId with parameter being sent in with URL
      </ReactRouter.Route>
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('container')      //Element to add everything to be rendered into
);
