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
          Skrevet av <Link to={"user/"+post.author}>
            {post.author}
          </Link><br/>
        </span>
        <span>
          {post.comments.length} kommentarer<br/>
        </span>
        Publisert {post.time_posted} 
      </div>
    </div>
  </div>
);

export default Thread;
