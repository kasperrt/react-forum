import React from 'react';

const Sorting = ({type, way, handleTypeChange, handleWayChange, type_hide}) => (
  <div className="sorting_container">
      Sorter på
      { !type_hide ? <select value={type} onChange={handleTypeChange}>
        <option value="date">dato</option>
        <option value="title">tittel</option>
      </select>
      : " dato " }
      <select value={way} onChange={handleWayChange}>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
  </div>
);

export default Sorting;
