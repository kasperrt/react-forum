var React = require('react');
var ReactRouter = require('react-router');

var Thread = React.createClass({  //Creates a new class, which contains the post, comments, and the new comment button and textarea
  render: function() {            //rendering function, returns what to be displayed
    var id = this.props.hash;
    var posts = this.props.posts;
    var post = posts.filter(function( obj ) {
      return obj.id == id;
    });
    post = post[0];
    return (
      <div>
        <div className="postContainer">
          <h1>{post.title}</h1> //gets the title value for the post
          <div className="postDescriptionContainer">
            {post.description} //gets the description value for the post
          </div>
          <div className="postInformation">
            <span>
              Skrevet av <ReactRouter.Link to={"user/"+post.author}> //links to the author's profile page
                {post.author} //gets the author value for the post
              </ReactRouter.Link><br/>
            </span>
            <span>
              {post.comments.length} kommentarer<br/> //gets the amount of commetns a post has
            </span>
            Publisert {post.time_posted} //gets the time_posted value for the post
          </div>
        </div>
        <hr/>
        <div className="commentSorter">
          Sorter på
          <select> //selecter to decide how the comments should be sorted, no functionality yet
            <option value="nyeste">nyeste først</option>
            <option value="eldste">eldste først</option>
          </select>
        </div>
        <div className="newCommentContainer">
          <div>
            <textarea rows="10" cols="80" placeholder="Skriv inn kommentar her" className="newCommentTextArea">
            </textarea>
          </div>
          <ReactRouter.Link className="newCommentButton" to={"createComment"}> //Links to a create comment page, no functionality yet
              Publiser
          </ReactRouter.Link>
        </div>
        <div className="thread_comments">
          <Comments comments={post.comments}>
            {this.props.children} //Renders the children sent from the Comments class
          </Comments>
        </div>
      </div>
    );
  }
});

//Comments class
var Comments = React.createClass({
  render: function(){
    var commentComponents = this.props.comments.map(function(comment){      //Loops through comments and applies design for every comment on the page
      return (
        <div id={comment.id} key={comment.id} className="comment">
          <ReactRouter.Link className="commentAuthor" to={"user/" + comment.author}>  //links to the author's profile page
          {comment.author}  //gets the author value for the comment
          </ReactRouter.Link>
          <div className={comment.comment_text}>
            {comment.comment_text} //gets the comment_text value for the comment
          </div>
          <div className="commentPosted">
            Publisert {comment.time_posted} //gets the time_posted value for the comment
          </div>
        </div>
      );
    });
    return <div> {commentComponents} </div>; //returns all of the comments for a post
  }
})

module.exports = Thread;  //exports Thread variable to any other class/file that use require('./thread.js');
