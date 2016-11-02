import React from 'react';
import ReactRouter, {Link} from 'react-router';

const Thread = ({post}) => (
  <div>
    <div className="postContainer">
      <h1>{post.title}</h1>
      <div className="postDescriptionContainer">
        {post.description}
      </div>
      <div className="postInformation">
        <span>
          Skrevet av <Link to={"user/"+post._author._id}>
            {post._author.name}
          </Link><br/>
        </span>
        <span>
          {post.comment_length} kommentarer<br/>
        </span>
        Publisert {post.posted_date}
      </div>
    </div>
  </div>
);

export default Thread;
