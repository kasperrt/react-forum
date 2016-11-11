import React from 'react';
import ReactRouter, {Link} from 'react-router';
import Moment from 'moment';
import Sorting from './Sorting';
import FilterContainer from '../containers/FilterContainer.js';

Moment.locale('nb');

const Comments = ({comments, handleDescriptionChange, addNewComment, value, type, way, handleTypeChange, handleWayChange, reMountDate}) => (
  <div>
    <Sorting type={type}
      way={way}
      handleTypeChange={handleTypeChange}
      handleWayChange={handleWayChange}
      type_hide={true} />
    <FilterContainer reMountDate={reMountDate} />
    <div className="newCommentContainer">
      <div>
        <textarea rows="10" cols="80" placeholder="Skriv inn kommentar her" className="newCommentTextArea" value={value} onChange={handleDescriptionChange}>
        </textarea>
      </div>
      <button className="newCommentButton" onClick={() => addNewComment()}>
          <span>Publiser</span>
      </button>
    </div>
    {comments.map((comment) => (
      <div id={comment._id} key={comment._id} className="comment">
        <Link className="commentAuthor" to={"user/" + comment._author._id}>
        {comment._author.name}
        </Link>
        <div className="commentText">
          {comment.description}
        </div>
        <div className="commentPosted">
          Publisert {Moment(comment.posted_date).fromNow()}
        </div>
      </div>
    )
  )}
  </div>
);

export default Comments;
