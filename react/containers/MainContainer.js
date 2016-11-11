import React, {Component} from 'react';
import NavbarContainer from '../containers/NavbarContainer';

class MainContainer extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <NavbarContainer currentUserId="u1" />
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer;
