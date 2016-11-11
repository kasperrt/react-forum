import React from 'react';
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory';

const Graph = ({posts, comments}) => (
      <VictoryChart
            width={500}
            height={300}
            theme={VictoryTheme.material}
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
);

export default Graph
