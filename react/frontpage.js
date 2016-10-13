var React = require('react');
var ReactRouter = require('react-router');

var posts = [
  {id: "post_hash1", title: "post1", description: "post1 description poop", time_posted: "11. jan", author: "bob poopmaster", comments: 1},
  {id: "post_hash2", title: "post2", description: "post2 description ass", time_posted: "12. jan", author: "mongo", comments: 20}
];

var Frontpage = React.createClass({
  render: function() {
    return(
      <div>
        <ReactRouter.Link className="new_post_button" to={"new_post"}>
            Nytt Innlegg
        </ReactRouter.Link>
        <div className="frontpage_posts">
          <Posts posts={posts}>
            {this.props.children}
          </Posts>
        </div>
      </div>
    );
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
