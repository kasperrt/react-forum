import React from 'react';
import ReactRouter from 'react-router';
import all_users from '../users';

const Posts({posts}) => (  
  <div>
    {posts.map((post)=>(
      <div id={post.id} key={post.id} className="post">
        <ReactRouter.Link className="postTitle" to={"posts/" + post.id}> //Link for view of the post
          {post.title}              //Printing post title
        </ReactRouter.Link>
        <div className="postDescription">{post.description}</div>   //printing post description
        <div className="postAuthorContainer">
          Skrevet av &nbsp;
          <ReactRouter.Link className="postAuthor" to={"user/" + post.author_id}>   //link to user that posted the psot
            {
              all_users.filter(( obj ) => (       //Applies author_name that goes with the author_id
                obj.userid == post.author_id
              ))[0].name 
            }     //printing author name
          </ReactRouter.Link>
        </div>
        <div className="postComments">
          {post.comments.length} kommentarer    //Prints number of comments
        </div>
        <div className="postPosted">Publisert {post.time_posted}</div>    //prints time posted.
      </div>
      )
    )}
  </div>
);

export default Posts
