import React, { Component } from 'react';
import Filter from '../components/Filter';
import axios from 'axios';
import moment from 'moment';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      startDate: null
    };
  };

  /*
   * On first show, don't filter, and on hide, remove the filtering.
   */

  showHideFunction(){
    const show = !this.state.show;
    if(show && this.state.startDate != null){
      this.props.reMountDate(this.state.startDate);
      this.setState({show});
    } else {
      this.props.reMountDate(show && this.state.startDate != null);
      this.state.startDate = null;
      this.setState({show, startDate: null});
    }

  }

  dateChange(e){
    this.state.startDate = e;
    this.setState({startDate: e});
    this.props.reMountDate(e);
  }

  render() {
    return (
      <Filter showHideFunction={this.showHideFunction.bind(this)}
        show={this.state.show}
        startDate={this.state.startDate}
        dateChange={this.dateChange.bind(this)} />
    )
  }
};

export default FilterContainer;
