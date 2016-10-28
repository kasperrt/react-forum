import React from 'react';
import Posts from './Posts';
import NewPostContainer from '../containers/newPostContainer.js';

const Frontpage = ({posts}) => (
  <div>
    <NewPostContainer posts={posts} />
    <div className="frontpage_posts">
      <Posts posts={posts}>          
      </Posts>
    </div>
  </div>
);

export default Frontpage;
