import React from 'react';

const Sorting = ({type, way, handleTypeChange, handleWayChange, type_hide}) => (
  <div className="sorting_container">
      Sorty by
      { !type_hide ? <select value={type} onChange={handleTypeChange}>
        <option value="date">date</option>
        <option value="title">title</option>
      </select>
      : " date " }
      <select value={way} onChange={handleWayChange}>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
  </div>
);

export default Sorting;
