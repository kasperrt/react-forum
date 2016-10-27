import React from 'react';
import ReactRouter from 'react-router';
import Thread from './components/Thread.js';
import Comments from './components/Comments.js';

class ThreadContainer extends Component {
  constructor(props) {
    super(props);
    this.post = this.props.posts.filter(( obj ) => (
                  obj.id = this.props.hash
                ))[0];
    }
  };

  changeSorting(e){
    console.log("Hello");
    console.log(this.post.comments.reverse());
  },

  render() {
    return (
      <Thread post={this.post}>
      <hr/>
      <div className="thread_comments">
        <Comments
          changeSorting={this.changeSorting.bind(this)}
          comments={this.post.comments}>
      </div>
    )
  }
};

export default ThreadContainer;
