import React from 'react';
import NewPost from '../components/newPost';

class NewPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  };

  newPost() {                         //Function being called when new post button being clicked
    if(!showPost){
      showPost = true;
    } else {
      posted = true;
      this.props.posts.unshift({id: "post_hash" + curr_number, title: this.state.title, description: this.state.description, time_posted: (new Date()).toString(), author_id: "u1", comments: []});
      curr_number = curr_number + 1;
      posted = false;
      showPost = false;
    }
  },

  handleTitleChange(e) {              //Handler for when title is being changed
    this.setState({
      title: e.target.value                     //updates title state-variable
    });
  },

  handleDescriptionChange(e) {          //Handler for when description is being changed
    this.setState({
      description: e.target.value                 //Updates description variable
    });
  },

  render() {
    return (              //return part of render function, for what to be returned on rendering
      <NewPost
          posted={this.posted}
          showPost={this.showPost}
          curr_number={this.curr_number}
          addNewPost={this.newPost.bind(this)}
          handleTitleChange={this.handleTitleChange.bind.(this)}
          handleDescriptionChange={this.handleDescriptionChange.bind(this)}
          >
    )
  }
};

export default NewPostContainer;
