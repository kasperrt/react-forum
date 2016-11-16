import React from 'react';

const Sorting = ({type, way, handleTypeChange, handleWayChange, type_hide}) => (
  <div className="sorting_container">
      <span>Sorter på</span>
      { !type_hide ? <select value={type} onChange={handleTypeChange}>
        <option value="date">dato</option>
        <option value="title">tittel</option>
      </select>
      : " dato " }
      <select value={way} onChange={handleWayChange}>
        <option value="desc">synkende</option>
        <option value="asc">stigende</option>
      </select>
  </div>
);

export default Sorting;
