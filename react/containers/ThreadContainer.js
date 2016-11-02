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
      description: ""
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

  };

  componentDidMount() {
    console.log("asd");
    axios.get(`http://localhost:3000/api/posts/` + this.props.params.post_hash)
      .then(res => {
        const posts = res.data;
        posts.comment_length = posts.comments.length;
        this.setState({ posts });
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
    axios.post('/api/comments/' + this.props.params.post_hash, {
      description: this.state.description
    })
    .then(function (response) {
      //this.props.posts.unshift({id: "post_hash" + this.curr_number, title: this.state.title, description: this.state.description, time_posted: (new Date()).toString(), author_id: "u1", comments: []});
      //this.curr_number = this.curr_number + 1;
      console.log("posted");
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
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
};

export default ThreadContainer;
