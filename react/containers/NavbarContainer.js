import React from 'react';
import Navbar from '../components/Navbar.js';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Navbar
        currentUserId = {this.props.currentUserId}
      >
    )
  }
};

export default NavbarContainer;
