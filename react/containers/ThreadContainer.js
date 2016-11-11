import React, { Component } from 'react';
import ReactRouter from 'react-router';
import Thread from '../components/Thread.js';
import Comments from '../components/Comments.js';
import axios from 'axios';
import PageNavigation from '../components/PageNavigation';

class ThreadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: this.props.params.post_id,
      posts: {
        _author: {
          name: "",
          _id: ""
        },
      comments: []},
      description: "",
      response: undefined,
      currentPage: 0,
      morePages: false,
      type: "hide",
      way: "asc"
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

  }

  componentDidMount() {
    var self = this;
    axios.get(`/api/posts/` + this.state.currentPage + '/' + this.props.params.post_hash  + "/" + this.state.way + "/0")
      .then(res => {
        const posts = res.data.post;
        const response = true;
        const morePages = res.data.morePages;
        posts.comment_length = posts.comments.length;
        this.setState({ posts, response, morePages });
      }).catch(err => {
        self.context.router.push("404")
      });
  }

  reMountDate(date){
    if(!date){
      this.componentDidMount();
    } else {
      axios.get(`/api/posts/` + this.state.currentPage + '/' + this.props.params.post_hash  + "/" + this.state.way + "/" + date.toDate())
      .then(res => {
        const posts = res.data.post;
        const response = true;
        const morePages = res.data.morePages;
        posts.comment_length = posts.comments.length;
        this.setState({ posts, response, morePages });
      }).catch(err => {
        self.context.router.push("404")
      });
    }
  }

  changeSorting(e){
    this.state.posts.comments.reverse()
    //this.setState();
    this.forceUpdate();
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  newComment(){
    if(this.state.description !== ""){
      var self = this;
      axios.post('/api/comments/' + this.props.params.post_hash, {
        description: this.state.description
      })
      .then(function (response) {
        //this.props.posts.unshift({id: "post_hash" + this.curr_number, title: this.state.title, description: this.state.description, time_posted: (new Date()).toString(), author_id: "u1", comments: []});
        //this.curr_number = this.curr_number + 1;
        const description = "";
        self.setState({description});
        self.componentDidMount();
      })
      .catch(function (error) {
        self.context.router.push("404")
      });
    }
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
    if ( !this.state.response ) {
         return <div></div>
    } else {
      return (
        <div>
          <Thread post={this.state.posts} />
          <hr/>
          <div className="thread_comments">
            <Comments
              comments={this.state.posts.comments}
              handleDescriptionChange={this.handleDescriptionChange}
              addNewComment={this.newComment.bind(this)}
              value={this.state.description}
              type="hide"
              way={this.state.way}
              handleTypeChange={this.handleTypeChange.bind(this)}
              handleWayChange={this.handleWayChange.bind(this)}
              reMountDate={this.reMountDate.bind(this)}/>
              </div>
            <PageNavigation currentPage={this.state.currentPage + 1}
               previousPage={this.previousPage.bind(this)}
               nextPage={this.nextPage.bind(this)}
               morePages={this.state.morePages} />
        </div>
      )
    }
  }
};

ThreadContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ThreadContainer;
