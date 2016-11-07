import React from 'react';
import Posts from './Posts';
import NewPostContainer from '../containers/newPostContainer.js';
import Sorting from './Sorting';

const Frontpage = ({posts, reMount, type, way, handleTypeChange, handleWayChange}) => (
  <div>
    <NewPostContainer posts={posts} remount={reMount} />
    <Sorting type={type}
      way={way}
      handleTypeChange={handleTypeChange}
      handleWayChange={handleWayChange}
      type_hide={false} />
    <div className="frontpage_posts">
      <Posts posts={posts}>
      </Posts>
    </div>
  </div>
);

export default Frontpage;
