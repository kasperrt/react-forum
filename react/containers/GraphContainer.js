import React from 'react';
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

/*TEST DATA END*/

const GraphContainer = props => (
	<div>
		<Graph posts={posts} comments={comments} />
	</div>
);

export default GraphContainer;