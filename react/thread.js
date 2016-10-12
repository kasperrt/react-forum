var React = require('react');
var ReactRouter = require('react-router');

var post = {id: "post_hash1", title: "post1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", time_posted: "11. jan", author: "bob poopmaster", comments: 3};

var comments = [
  {id: "comment_hash1", comment_text: "This is a comment", time_posted: "11. jan", author: "bob poopmaster"},
  {id: "comment_hash2", comment_text: "This is also a comment", time_posted: "11. jan", author: "travis scott"},
  {id: "comment_hash3", comment_text: "This is not a comment", time_posted: "12. jan", author: "bob poopmaster"}
];

var Thread = React.createClass({
  render: function() {
    return (
      <div>
        <div className="postContainer">
          <h1>{post.title}</h1>
          <div className="postDescriptionContainer">
            {post.description}
          </div>
          <div className="postInformation">
            <span>
              Skrevet av <ReactRouter.Link to={"user/"+post.author}>
                {post.author}
              </ReactRouter.Link><br/>
            </span>
            <span>
              {post.comments} kommentarer<br/>
            </span>
            Publisert {post.time_posted}
          </div>
        </div>
        <hr/>
        <div className="commentSorter">
          Sorter på
          <select>
            <option value="nyeste">nyeste først</option>
            <option value="eldste">eldste først</option>
          </select>
        </div>
        <div className="newCommentContainer">
          <div>
            <textarea rows="10" cols="80" placeholder="Skriv inn kommentar her" className="newCommentTextArea">
            </textarea>
          </div>
          <ReactRouter.Link className="newCommentButton" to={"createComment"}>
              Publiser
          </ReactRouter.Link>
        </div>
        <div className="thread_comments">
          <Comments comments={comments}>
            {this.props.children}
          </Comments>
        </div>
      </div>
    );
  }
});

var Comments = React.createClass({
  render: function(){
    var commentComponents = this.props.comments.map(function(comment){
      return (
        <div id={comment.id} key={comment.id} className="comment">
          <ReactRouter.Link className="commentAuthor" to={"user/" + comment.author}>
          {comment.author}
          </ReactRouter.Link>
          <div className={comment.comment_text}>
            {comment.comment_text}
          </div>
          <div className="commentPosted">
            Publisert {comment.time_posted}
          </div>
        </div>
      );
    });
    return <div> {commentComponents} </div>;
  }
})

module.exports = Thread;
