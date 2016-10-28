import React from 'react';
import ReactRouter, { Link } from 'react-router';
import all_users from '../users';

const Posts = ({posts}) => (
  <div>
    {posts.map((post)=>(
      <div id={post.id} key={post.id} className="post">
        <Link className="postTitle" to={"posts/" + post.id}>
          {post.title}
        </Link>
        <div className="postDescription">{post.description}</div>
        <div className="postAuthorContainer">
          Skrevet av &nbsp;
          <Link className="postAuthor" to={"user/" + post.author_id}>
            {
              all_users.filter(( obj ) => (
                obj.userid == post.author_id
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
