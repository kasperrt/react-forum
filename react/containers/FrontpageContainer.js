import React, {Component} from 'react';
import Frontpage from '../components/frontpage';
import axios from 'axios';

class FrontpageContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/posts/`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  render() {
    return (
      <Frontpage
        posts = {this.state.posts}
        reMount={this.componentDidMount.bind(this)}
      />
    )
  }
}

export default FrontpageContainer;
