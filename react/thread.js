var React = require('react');
var ReactRouter = require('react-router');


var post = {
  post_hash1: {id: "post_hash1", title: "post1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", time_posted: "11. jan", author: "bob poopmaster", comments: 1},
  post_hash2: {id: "post_hash2", title: "post2", description: "post2 description ass", time_posted: "12. jan", author: "mongo", comments: 20}
};

var comments = [
  {id: "comment_hash1", comment_text: "This is a comment", time_posted: "11. jan", author: "bob poopmaster"},
  {id: "comment_hash2", comment_text: "This is also a comment", time_posted: "11. jan", author: "travis scott"},
  {id: "comment_hash3", comment_text: "This is not a comment", time_posted: "12. jan", author: "bob poopmaster"}
];

var Thread = React.createClass({
  render: function() {
    var id = this.props.params.post_hash;
    return (
      <div>
        <div className="postContainer">
          <h1>{post[id].title}</h1>
          <div className="postDescriptionContainer">
            {post[id].description}
          </div>
          <div className="postInformation">
            <span>
              Skrevet av <ReactRouter.Link to={"user/"+post[id].author}>
                {post[id].author}
              </ReactRouter.Link><br/>
            </span>
            <span>
              {post[id].comments} kommentarer<br/>
            </span>
            Publisert {post[id].time_posted}
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
