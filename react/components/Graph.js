import React from 'react';
import {VictoryChart, VictoryLine} from 'victory';

const Graph = ({posts, comments}) => (
	<svg >
      <VictoryChart 
      	scale={{
			x: "time"
		}}>
		
        <VictoryLine 
        	label="Posts"
        	interpolation="monotoneX"
        	style={{
        		data: {
        			stroke: "#00F"
        		}
        	}}
        	data={posts}/>

        <VictoryLine 
        	label="Comments"
        	interpolation="monotoneX"
        	style={{
        		data: {
        			stroke: "#F00"
        		}
        	}}
        	data={comments}/>

      </VictoryChart>
	</svg>
);

export default Graph