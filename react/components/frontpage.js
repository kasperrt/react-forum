import React from 'react';
import Posts from './Posts';
import NewPostContainer from '../containers/newPostContainer.js';
import Sorting from './Sorting';
import FilterContainer from '../containers/FilterContainer.js';

const Frontpage = ({posts, reMount, type, way, handleTypeChange, handleWayChange, reMountDate}) => (
  <div>
    <NewPostContainer posts={posts} remount={reMount} />
    <Sorting type={type}
      way={way}
      handleTypeChange={handleTypeChange}
      handleWayChange={handleWayChange}
      type_hide={false} />
    <FilterContainer reMountDate={reMountDate} />
    <div className="frontpage_posts">
      <Posts posts={posts}>
      </Posts>
    </div>
  </div>
);

export default Frontpage;
