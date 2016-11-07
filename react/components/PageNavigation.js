import React from 'react';

const PageNavigation = ({currentPage, previousPage, nextPage, morePages}) => (
  <div className="navigation_div">
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

export default PageNavigation;
