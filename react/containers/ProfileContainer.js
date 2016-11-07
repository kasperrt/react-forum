import React, {Component} from 'react';
import Profile from '../components/Profile.js';
import ReactRouter, {Link} from 'react-router';
import axios from 'axios';

class ProfileContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.loggOutButton = false;
    this.state = {
      user_id: this.props.params.userId,
      user: { last_visited: []},
      logged_in: false,
      response: undefined
    }
  }

  componentDidMount() {
    var id = this.state.user_id;
    if(id == undefined) id = "";
    self = this;
    axios.get(`/api/users/` + id)
      .then(res => {
        const user = res.data.user;
        user.posts = user.posts;
        user.comments = user.comments;
        const logged_in = res.data.logged_in;
        const response = true;
        this.setState({ user, logged_in, response });
      }).catch(res => {
        self.context.router.push("404")
      });
  }

  render() {

		if(this.state.logged_in){
			this.loggOutButton = true;
		}
    if ( !this.state.response ) {
         return <div></div>
    } else {
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
  }
};

ProfileContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ProfileContainer;
