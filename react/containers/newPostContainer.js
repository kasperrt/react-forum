import React, { Component } from 'react';
import NewPost from '../components/newPost';
import axios from 'axios';

class NewPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      showPost: false,
      posted: false
    };
    this.showPost = false;
    this.posted = false;
    this.curr_number = 3;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  };

  newPost() {
    var self = this;
    if(!this.state.showPost){
      this.state.showPost = true;
    } else {
      axios.post('/api/posts', {
        title: this.state.title,
        description: this.state.description
      })
      .then(function (response) {
        //this.props.posts.unshift({id: "post_hash" + this.curr_number, title: this.state.title, description: this.state.description, time_posted: (new Date()).toString(), author_id: "u1", comments: []});
        //this.curr_number = this.curr_number + 1;
        const posted = false;
        const showPost = false;
        self.setState({posted, showPost});
        self.props.remount();
      })
      .catch(function (error) {
        console.log(error);
      });
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
          posted={this.state.posted}
          showPost={this.state.showPost}
          addNewPost={this.newPost.bind(this)}
          handleTitleChange={this.handleTitleChange}
          handleDescriptionChange={this.handleDescriptionChange} />
    )
  }
};

export default NewPostContainer;
