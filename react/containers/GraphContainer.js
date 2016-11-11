import React, {Component} from 'react';
import Graph from '../components/Graph';

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pre_posts: this.props.posts,
      pre_comments: this.props.comments,
      posts: [],
      comments: [],
      dates: {},
      dates_comments: {}
    }
  }

  populatePosts(){
    var self = this;
    this.state.pre_posts.forEach(function(element){
      var date = new Date(element.posted_date);
      date.setHours(0,0,0,0);
      if(self.state.dates[date]){
        self.state.dates[date]["y"] = self.state.dates[date]["y"] + 1;
      }else{
        self.state.dates[date] = {
          x: date,
          y: 1
        }
      }
    });

    var keys = Object.keys(this.state.dates);
    for(var x = 0; x < keys.length; x++){
      this.state.posts.push(this.state.dates[keys[x]]);
    }
    this.setState({});
  }

  populateComments(){
    var self = this;

    this.state.pre_comments.forEach(function(element){
      var date = new Date(element.posted_date);
      date.setHours(0,0,0,0);
      if(self.state.dates_comments[date]){
        self.state.dates_comments[date]["y"] = self.state.dates_comments[date]["y"] + 1;
      }else{
        self.state.dates_comments[date] = {
          x: date,
          y: 1
        }
      }
    });

    var keys = Object.keys(this.state.dates_comments);
    for(var x = 0; x < keys.length; x++){
      this.state.comments.push(this.state.dates_comments[keys[x]]);
    }
    this.setState({});
  }

  componentWillMount(){
    this.populatePosts();
    this.populateComments();
  }

  render() {
    return (
      <div>
        <Graph posts={this.state.posts} comments={this.state.comments} />
    	</div>
    )
  }
};

export default GraphContainer;
