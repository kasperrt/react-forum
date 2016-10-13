var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var showPost = false;
var posted = false;

var posts = [
  {id: "post_hash1", title: "post1", description: "post1 description poop", time_posted: "11. jan", author: "bob poopmaster", comments: 1},
  {id: "post_hash2", title: "post2", description: "post2 description ass", time_posted: "12. jan", author: "mongo", comments: 20}
];

var Frontpage = React.createClass({
  render: function() {
    return(
      <div>
        <NewPost />
        <div className="frontpage_posts">
          <Posts posts={posts}>
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
      posts.unshift({id: "post_hash3", title: this.state.title, description: this.state.description, time_posted: (new Date()).toString(), author: "UNDEFINED", comments: 0});
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
      return (
        <div id={post.id} key={post.id} className="post">
          <ReactRouter.Link className="postTitle" to={"posts/" + post.id}>
            {post.title}
          </ReactRouter.Link>
          <div className="postDescription">{post.description}</div>
          <div className="postAuthorContainer">
            Skrevet av &nbsp;
            <ReactRouter.Link className="postAuthor" to={"user/" + post.author}>
              {post.author}
            </ReactRouter.Link>
          </div>
          <div className="postComments">
            {post.comments} kommentarer
          </div>
          <div className="postPosted">Publisert {post.time_posted}</div>
        </div>
      );
    });
    return <div>{postsComponents}</div>
  }
})

module.exports = Frontpage;
