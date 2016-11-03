import React, {Component} from 'react';
import Posts from '../components/Posts';
import axios from 'axios';

class SearchContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      update: true
    }
  }

  componentDidMount(){
    axios.get(`/api/search/` + this.props.params.query)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  shouldComponentUpdate(){
    this.state.update = !this.state.update;
    if(this.state.update){
      this.componentDidMount()
    }
    return true;
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
