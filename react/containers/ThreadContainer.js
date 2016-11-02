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
    }

  };

  componentDidMount() {
    axios.get(`http://localhost:3000/api/posts/` + this.props.params.post_hash)
      .then(res => {
        const posts = res.data;
        posts.comment_length = posts.comments.length;
        console.log(posts);
        this.setState({ posts });
      });
  }

  changeSorting(e){
    console.log("Reverse sort");

  }

  render() {
    return (
      <div>
        <Thread post={this.state.posts} />
        <hr/>
        <div className="thread_comments">
          <Comments
            changeSorting={this.changeSorting.bind(this)}
            comments={this.state.posts.comments} />
        </div>
      </div>
    )
  }
};

export default ThreadContainer;
