import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const Filter = ({showHideFunction, show, startDate, dateChange}) => (
  <div className="filter_div">
    { !show ?
      <button className="filter_button" onClick={() => showHideFunction()}>Filtrer</button>
      :
      <div>
        <button className="filter_button" onClick={() => showHideFunction()}>Fjern filter</button>
        &nbsp;Filtrer på dato &nbsp;
        <DatePicker
          selected={startDate}
          onChange={dateChange} />
      </div>
    }
  </div>
);

export default Filter;
