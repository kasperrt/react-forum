var React = require('react');
var ReactRouter = require('react-router');
var all_users = require('./users.js');

var showPost = false;
var posted = false;
var curr_number = 3;

var Frontpage = React.createClass({
  render: function() {
    return(
      <div>
        <NewPost posts={this.props.posts} />
        <div className="frontpage_posts">
          <Posts posts={this.props.posts}>
            {this.props.children}
          </Posts>
        </div>
      </div>
    );
  }
});

var NewPost = React.createClass({
  newPost: function() {
    if(!showPost){
      showPost = true;
    } else {
      posted = true;
    }
  },

  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },

  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },

  render: function() {
    var to_add;
    var button = <a href="#" className="new_post_button" onClick={this.newPost}>Nytt Innlegg</a>;

    if(showPost && !posted) {
      to_add = <div className="new_post before_posted">
        <input type="text" name="title" placeholder="Title of post" onChange={this.handleTitleChange} />
        <textarea className="new_post_text" placeholder="Description.." onChange={this.handleDescriptionChange}>
        </textarea>
      </div>;
    } else if(posted) {
      button = "";
      to_add = <div className="success">Posted</div>
      this.props.posts.unshift({id: "post_hash" + curr_number, title: this.state.title, description: this.state.description, time_posted: (new Date()).toString(), author: "UNDEFINED", comments: 0});
      curr_number = curr_number + 1;
      posted = false;
      showPost = false;
    }
    return (
      <div id="new_post">
        {to_add}
        {button}
      </div>
    )
  }
});

var Posts = React.createClass({
  render: function() {
    var postsComponents = this.props.posts.map(function(post){
      var author_name = all_users.filter(function( obj ) {
        return obj.userid == post.author_id;
      });
      author_name = author_name[0].name;
      return (
        <div id={post.id} key={post.id} className="post">
          <ReactRouter.Link className="postTitle" to={"posts/" + post.id}>
            {post.title}
          </ReactRouter.Link>
          <div className="postDescription">{post.description}</div>
          <div className="postAuthorContainer">
            Skrevet av &nbsp;
            <ReactRouter.Link className="postAuthor" to={"user/" + post.author_id}>
              {author_name}
            </ReactRouter.Link>
          </div>
          <div className="postComments">
            {post.comments.length} kommentarer
          </div>
          <div className="postPosted">Publisert {post.time_posted}</div>
        </div>
      );
    });
    return <div>{postsComponents}</div>
  }
})

module.exports = Frontpage;
