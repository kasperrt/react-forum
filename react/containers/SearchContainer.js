import React, {Component} from 'react';
import Posts from '../components/Posts';
import axios from 'axios';

class SearchContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      update: "",
      currentPage: 0,
      morePages: false
    }
  }

  componentDidMount(){
    var self = this;
    axios.get(`/api/search/` + this.state.currentPage + '/' + this.props.params.query)
      .then(res => {
        const posts = res.data.posts;
        const morePages = res.data.morePages;
        const update = this.props.params.query;
        self.setState({ posts, morePages, update });
      });
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.params.query != nextState.update){
      this.componentDidMount();
    }
    return true;
  }

  nextPage() {
    this.state.currentPage = this.state.currentPage + 1;
    this.componentDidMount();
  }

  previousPage(){
    if(this.state.currentPage > 0){
      this.state.currentPage = this.state.currentPage - 1;
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div>
        <Posts
          posts = {this.state.posts}
        />
        {this.state.currentPage > 1 ? <button onClick={() => this.previousPage()}>
          previous page
          </button> : null}
        page {this.state.currentPage + 1}
        {this.state.morePages ?
          <button onClick={() => this.nextPage()}>
            next page
          </button>
        : null}
      </div>
    )
  }
}

export default SearchContainer;
