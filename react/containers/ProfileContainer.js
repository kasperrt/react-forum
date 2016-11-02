import React, {Component} from 'react';
import Profile from '../components/Profile.js';
import ReactRouter, {Link} from 'react-router';
import axios from 'axios';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.loggOutButton = false;
    this.state = {
      user_id: this.props.params.userId,
      user: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/` + this.state.user_id)
      .then(res => {
        const user = res.data;
        user.posts = user.posts.length;
        user.comments = user.comments.length;
        this.setState({ user });
      });
  }

  render() {

		if(this.state.user_id == "u1"){
			this.loggOutButton = true;
		}
    return (
      <Profile
        loggOutButton={this.loggOutButton}
        name={this.state.user.name}
        date={this.state.user.created}
        posts={this.state.user.posts}
        comments={this.state.user.comments}
        image={this.state.user.image}
      />
    )
  }
};

export default ProfileContainer;
