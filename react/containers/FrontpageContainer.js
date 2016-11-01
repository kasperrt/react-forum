import React, {Component} from 'react';
import Frontpage from '../components/frontpage';

class FrontpageContainer extends Component{
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <Frontpage
        posts = {this.props.posts}
        all_users = {this.props.all_users}
      />
    )
  }
}

export default FrontpageContainer;
