import React, { Component } from 'react';
import NewPost from '../components/newPost';

class NewPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.showPost = false;
    this.posted = false;
    this.curr_number = 3;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  };

  newPost() {
    if(!this.showPost){
      this.showPost = true;
    } else {
      this.posted = true;
      this.props.posts.unshift({id: "post_hash" + this.curr_number, title: this.state.title, description: this.state.description, time_posted: (new Date()).toString(), author_id: "u1", comments: []});
      this.curr_number = this.curr_number + 1;
      this.posted = false;
      this.showPost = false;
    }
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  render() {
    return (              
      <NewPost
          posted={this.posted}
          showPost={this.showPost}
          addNewPost={this.newPost.bind(this)}
          handleTitleChange={this.handleTitleChange}
          handleDescriptionChange={this.handleDescriptionChange} />
    )
  }
};

export default NewPostContainer;
