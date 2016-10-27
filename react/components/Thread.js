import React from 'react';
import ReactRouter from 'react-router';

const Thread = ({post}) => (
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
  </div>
);

export default Thread;
