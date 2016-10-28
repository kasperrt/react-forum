import React from 'react';
import ReactRouter, {Link} from 'react-router';

const Comments = ({changeSorting, comments}) => (
  <div>
    <div className="commentSorter">
      Sorter på
      <select onChange={() => changeSorting()}> 
        <option value="1">nyeste først</option>
        <option value="-1">eldste først</option>
      </select>
    </div>
    <div className="newCommentContainer">
      <div>
        <textarea rows="10" cols="80" placeholder="Skriv inn kommentar her" className="newCommentTextArea">
        </textarea>
      </div>
      <Link className="newCommentButton" to={"createComment"}>
          Publiser
      </Link>
    </div>
    {comments.map((comment) => (
      <div id={comment.id} key={comment.id} className="comment">
        <Link className="commentAuthor" to={"user/" + comment.author}>
        {comment.author}
        </Link>
        <div className={comment.comment_text}>
          {comment.comment_text}
        </div>
        <div className="commentPosted">
          Publisert {comment.time_posted}
        </div>
      </div>
    )
  )}
  </div>
);

export default Comments;
