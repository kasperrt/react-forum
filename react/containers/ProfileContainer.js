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
      user: { last_visited: []},
      logged_in: false
    }
  }

  componentDidMount() {
    var id = this.state.user_id;
    if(id == undefined) id = "";
    axios.get(`http://localhost:3000/api/users/` + id)
      .then(res => {
        const user = res.data.user;
        user.posts = user.posts.length;
        user.comments = user.comments.length;
        const logged_in = res.data.logged_in;
        this.setState({ user, logged_in });
      });
  }

  render() {

		if(this.state.logged_in){
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
        last_visited={this.state.user.last_visited}
      />
    )
  }
};

export default ProfileContainer;
