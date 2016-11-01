import React, {Component} from 'react';
import Profile from '../components/Profile.js';
import ReactRouter, {Link} from 'react-router';
var users = require('../users.js');

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.hash = this.props.hash;
    this.user = users.filter(( obj ) => (
      this.hash == obj.userid
    ))[0];
    this.name = this.user.name;
    this.date = this.user.date;
    this.posts = this.user.posts;
    this.comments = this.user.comments;
    this.loggOutButton = false;
  };

  render() {

		if(this.hash == "u1"){
			this.loggOutButton = true;
		}
    return (
      <Profile
        loggOutButton={this.loggOutButton}
        name={this.name}
        date={this.date}
        posts={this.posts}
        comments={this.comments}
      />
    )
  }
};

export default ProfileContainer;
