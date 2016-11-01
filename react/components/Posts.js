import React from 'react';
import ReactRouter, { Link } from 'react-router';

const Posts = ({posts, all_users}) => (
  <div>
    {console.log(posts)}
    {posts.map((post)=>(
      <div key={post.id} className="post">
        <Link className="postTitle" to={"posts/" + post.id}>
          {post.title}
        </Link>
        <div className="postDescription">{post.description}</div>
        <div className="postAuthorContainer">
          Skrevet av &nbsp;
          <Link className="postAuthor" to={"user/" + post.author_id}>
            {
              all_users.filter(( obj ) => (
                 post.author_id == obj.userid
              ))[0].name
            }
          </Link>
        </div>
        <div className="postComments">
          {post.comments.length} kommentarer
        </div>
        <div className="postPosted">Publisert {post.time_posted}</div>
      </div>
      )
    )}
  </div>
);

export default Posts
