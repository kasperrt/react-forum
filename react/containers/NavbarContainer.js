import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';
import axios from 'axios';
import cookie from 'react-cookie';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  loggout(){
    axios.get(`http://it2810-19.idi.ntnu.no:3000/api/loggout/`)
      .then(res => {
        cookie.remove('user');
        this.context.router.push("/");
      });
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
        loggout={this.loggout.bind(this)}
      />
    )
  }
};

NavbarContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default NavbarContainer;
