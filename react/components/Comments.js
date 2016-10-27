import React from 'react';
import ReactRouter from 'react-router';

const Comments = ({changeSorting, comments}) => (
  <div>
    <div className="commentSorter">
      Sorter på
      <select onChange={() => changeSorting()}> //selecter to decide how the comments should be sorted, no functionality yet
        <option value="1">nyeste først</option>
        <option value="-1">eldste først</option>
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
    {comments.map((comment) => (//Loops through comments and applies design for every comment on the page
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
  )};
);

export default Comments;
