import React, {Component} from 'react';
import Posts from '../components/Posts';
import axios from 'axios';
import Sorting from '../components/Sorting';
import PageNavigation from '../components/PageNavigation';

class SearchContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      update: "",
      currentPage: 0,
      morePages: false,
      type: "date",
      way: "desc"
    }
  }

  componentDidMount(){
    var self = this;
    axios.get(`/api/search/` + this.state.currentPage + '/' + this.props.params.query + "/" + this.state.type + "/" + this.state.way)
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

  render() {
    return (
      <div>
        <Sorting type={this.state.type}
          way={this.state.way}
          handleTypeChange={this.handleTypeChange.bind(this)}
          handleWayChange={this.handleWayChange.bind(this)}
          type_hide={false} />
        <Posts
          posts = {this.state.posts}
        />
        <PageNavigation currentPage={this.state.currentPage + 1}
          previousPage={this.previousPage.bind(this)}
          nextPage={this.nextPage.bind(this)}
          morePages={this.state.morePages} />
      </div>
    )
  }
}

export default SearchContainer;
