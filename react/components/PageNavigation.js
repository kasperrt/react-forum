import React from 'react';

const PageNavigation = ({currentPage, previousPage, nextPage, morePages}) => (
  <div className="navigation_div">
    {currentPage > 1 ?
      <img className="navigation_arrow" onClick={() => previousPage()} src="http://image.flaticon.com/icons/svg/60/60573.svg" alt="Next page" height="10px"></img>
      : null}
    Side {currentPage}
    {morePages ?
      <img className="navigation_arrow" onClick={() => nextPage()} src="http://image.flaticon.com/icons/svg/60/60758.svg" alt="Next page" height="10px"></img>
    : null}
  </div>
);

export default PageNavigation;
