import React from 'react';
import Posts from './Posts';
import NewPostContainer from '../containers/newPostContainer.js';

const Frontpage = ({posts, all_users}) => (
  <div>
    <NewPostContainer posts={posts} />
    <div className="frontpage_posts">
      <Posts posts={posts} all_users={all_users}>
      </Posts>
    </div>
  </div>
);

export default Frontpage;
