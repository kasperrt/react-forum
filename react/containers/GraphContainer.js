import React, {Component} from 'react';
import Graph from '../components/Graph';

/*TEST DATA START*/

var dates = [
  new Date(2015, 11, 1),
  new Date(2016, 0, 1),
  new Date(2016, 1, 1),
  new Date(2016, 2, 1),
  new Date(2016, 3, 1)]

var comments=[
    {x: dates[0], y: 1},
    {x: dates[1], y: 10},
    {x: dates[2], y: 3},
    {x: dates[3], y: 2},
    {x: dates[4], y: 0},
]

var posts=[
    {x: dates[0], y: 2},
    {x: dates[1], y: 0},
    {x: dates[2], y: 2},
    {x: dates[3], y: 1},
    {x: dates[4], y: 6},
]

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      comments: this.props.comments
    }
  }

  render() {
    var posts = [];
    var dates = {};
    var dates_comments = {};
    var comments = [];
    this.state.posts.forEach(function(element){
      var date = new Date(element.posted_date);
      date.setHours(0,0,0,0);
      if(dates[date]){
        dates[date]["y"] = dates[date]["y"] + 1;
      }else{
        dates[date] = {
          x: date,
          y: 1
        }
      }
    });

    this.state.comments.forEach(function(element){
      var date = new Date(element.posted_date);
      date.setHours(0,0,0,0);
      if(dates_comments[date]){
        dates_comments[date]["y"] = dates_comments[date]["y"] + 1;
      }else{
        dates_comments[date] = {
          x: date,
          y: 1
        }
      }
    });

    var keys = Object.keys(dates);
    for(var x = 0; x < keys.length; x++){
      posts.push(dates[keys[x]]);
    }

    var keys = Object.keys(dates_comments);
    for(var x = 0; x < keys.length; x++){
      comments.push(dates_comments[keys[x]]);
    }

    return (
      <div>
        <Graph posts={posts} comments={comments} />
    	</div>
    )
  }
};

export default GraphContainer;
