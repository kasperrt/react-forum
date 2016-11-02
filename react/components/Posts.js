import React from 'react';
import Moment from 'moment';
import ReactRouter, { Link } from 'react-router';

Moment.locale('nb');

const Posts = ({posts}) => (
  <div>
    {posts.map((post)=>(
      <div key={post._id} className="post">
        <Link className="postTitle" to={"posts/" + post._id}>
          {post.title}
        </Link>
        <div className="postDescription">{post.description}</div>
        <div className="postAuthorContainer">
          Skrevet av &nbsp;
          <Link className="postAuthor" to={"user/" + post._author._id}>
            {
              post._author.name
            }
          </Link>
        </div>
        <div className="postComments">
          {post.comments.length} kommentarer
        </div>
        <div className="postPosted">Publisert {Moment(post.posted_date).fromNow()}</div>
      </div>
      )
    )}
  </div>
);

export default Posts
