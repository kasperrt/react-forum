import React from 'react';
import ReactRouter, {Link} from 'react-router';
import GraphContainer from '../containers/GraphContainer'
import Moment from 'moment';

Moment.locale('nb');

const Profile = ({loggOutButton, name, date, posts, comments, image, last_visited}) => (
  <div className="content">
    <div id="layer1" className="layers">
      <ul>
        <li><h2>Min side</h2></li>
        {loggOutButton ? <li id="rightLi" style={{float: "right"}}><Link to="/" className="btnRed"><span>Logg ut</span></Link></li> : null}
      </ul>
    </div>
    <div id="layer2" className="layers">
      <img src={image} alt="Profile"/>

      <div className="layerDiv">
        <p>Navn: {name}</p>
        <p>Bruker opprettet: {Moment(date).fromNow()}</p>
        <br/>
        <p>Antall innlegg skrevet: {posts}</p>
        <p>Antall kommentarer skrevet: {comments}</p>
      </div>
    </div>
    <div id="layer3" className="layers">
      <div className="layerDiv">
        <h2>Sist besøkte innlegg</h2>
        <ul className="lastUl">
        {console.log(last_visited)}
          {last_visited.map((last)=>(
            <li key={last._id}><Link to={"/posts/" + last._id}><span>{last.title}</span></Link></li>
            )
          )}
        </ul>
      </div>

      <div className="layerDiv">
        <h2>Bidrag per måned</h2>
        <GraphContainer />
      </div>
    </div>
  </div>
);

export default Profile;
