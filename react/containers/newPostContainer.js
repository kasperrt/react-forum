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
    } else if(this.state.title !== "" && this.state.description !== ""){
      axios.post('/api/posts', {
        title: this.state.title,
        description: this.state.description
      })
      .then(function (response) {
        self.context.router.push("posts/" + response.data.posted);
      })
      .catch(function (error) {
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

NewPostContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default NewPostContainer;
