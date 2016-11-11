import React, {Component} from 'react';
import Frontpage from '../components/frontpage';
import axios from 'axios';
import cookie from 'react-cookie';
import PageNavigation from '../components/PageNavigation';

class FrontpageContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      morePages: false,
      type: "date",
      way: "desc"
    }
  }

  componentDidMount() {
    axios.get(`/api/posts/p/` + this.state.page + "/" + this.state.type + "/" + this.state.way + "/0")
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

  handleTypeChange(e){
    this.state.type = e.target.value;
    this.setState({type: e.target.value});
    this.componentDidMount();
  }

  handleWayChange(e){
    this.state.way = e.target.value;
    this.setState({way: e.target.value});
    this.componentDidMount();
  }

  reMountDate(date){
    if(!date){
      this.componentDidMount();
    } else {
      axios.get(`/api/posts/p/` + this.state.page + "/" + this.state.type + "/" + this.state.way + "/" + date.toDate())
        .then(res => {
          const posts = res.data.posts;
          const morePages = res.data.morePages;
          this.setState({ posts, morePages });
        });
    }
  }

  render() {
    return (
      <div>
        <Frontpage
          posts = {this.state.posts}
          reMount={this.componentDidMount.bind(this)}
          type={this.state.type}
          way={this.state.way}
          handleTypeChange={this.handleTypeChange.bind(this)}
          handleWayChange={this.handleWayChange.bind(this)}
          reMountDate={this.reMountDate.bind(this)} />
        <PageNavigation currentPage={this.state.page + 1}
          previousPage={this.previousPage.bind(this)}
          nextPage={this.nextPage.bind(this)}
          morePages={this.state.morePages} />
      </div>
    )
  }
}

export default FrontpageContainer;
