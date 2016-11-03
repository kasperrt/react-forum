import React from 'react';
import Posts from './Posts';
import NewPostContainer from '../containers/newPostContainer.js';

const Frontpage = ({posts, reMount}) => (
  <div>
    <NewPostContainer posts={posts} remount={reMount} />
    <div className="frontpage_posts">
      <Posts posts={posts}>
      </Posts>
    </div>
  </div>
);

export default Frontpage;
