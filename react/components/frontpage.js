import React from 'react';
import Posts from './Posts';
import NewPostContainer from '../containers/newPostContainer.js';

const Frontpage = ({posts, reMount, nextPage, previousPage, currentPage, morePages}) => (
  <div>
    <NewPostContainer posts={posts} remount={reMount} />
    <div className="frontpage_posts">
      <Posts posts={posts}>
      </Posts>
    </div>

    {currentPage > 1 ? <button onClick={() => previousPage()}>
      previous page
      </button> : null}
    page {currentPage}
    {morePages ?
      <button onClick={() => nextPage()}>
        next page
      </button>
    : null}
  </div>
);

export default Frontpage;
