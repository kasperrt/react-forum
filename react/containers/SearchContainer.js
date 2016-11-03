import React, {Component} from 'react';
import Posts from '../components/Posts';
import axios from 'axios';

class SearchContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    console.log(this.props.params.query);
    axios.get(`/api/search/` + this.props.params.query)
      .then(res => {
        const posts = res.data;
        console.log(posts);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <Posts
        posts = {this.state.posts}
      />
    )
  }
}

export default SearchContainer;
