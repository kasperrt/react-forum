import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  search(e){
    e.preventDefault();
    var val = this.state.value;
    this.state.value = "";
    this.context.router.push("search/" + val);

  }

  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <Navbar
        currentUserId = {this.props.currentUserId}
        search = {this.search.bind(this)}
        handleChange={this.handleChange}
        value={this.state.value}
      />
    )
  }
};

NavbarContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default NavbarContainer;
