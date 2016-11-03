import React, { Component } from 'react';
import ReactRouter from 'react-router';
import Thread from '../components/Thread.js';
import Comments from '../components/Comments.js';
import axios from 'axios';

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
      response: undefined
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

  }

  componentDidMount() {
    var self = this;
    axios.get(`/api/posts/` + this.props.params.post_hash)
      .then(res => {
        const posts = res.data;
        const response = true;
        posts.comment_length = posts.comments.length;
        this.setState({ posts, response });
      }).catch(err => {
        self.context.router.push("404")
      });
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
              changeSorting={this.changeSorting.bind(this)}
              comments={this.state.posts.comments}
              handleDescriptionChange={this.handleDescriptionChange}
              addNewComment={this.newComment.bind(this)} />
          </div>
        </div>
      )
    }
  }
};

ThreadContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ThreadContainer;
