import React, {Component} from 'react';
import Frontpage from '../components/frontpage';
import axios from 'axios';
import cookie from 'react-cookie';

class FrontpageContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      morePages: false
    }
  }

  componentDidMount() {
    axios.get(`/api/posts/p/` + this.state.page)
      .then(res => {
        const posts = res.data.posts;
        const morePages = res.data.morePages;
        this.setState({ posts, morePages });
      });
  }

  nextPage() {
    this.state.page = this.state.page + 1;
    this.componentDidMount();
  }

  previousPage(){
    if(this.state.page > 0){
      this.state.page = this.state.page - 1;
      this.componentDidMount();
    }
  }

  render() {
    return (
      <Frontpage
        posts = {this.state.posts}
        reMount={this.componentDidMount.bind(this)}
        nextPage={this.nextPage.bind(this)}
        previousPage={this.previousPage.bind(this)}
        currentPage={this.state.page + 1}
        morePages={this.state.morePages}
      />
    )
  }
}

export default FrontpageContainer;
