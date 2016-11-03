import React from 'react';
import ReactRouter, {Link} from 'react-router';
import GraphContainer from '../containers/GraphContainer'
import Moment from 'moment';

Moment.locale('nb');

const Profile = ({loggOutButton, name, date, posts, comments, image, last_visited}) => (  <div className="content">
    <div className="title">
        <h2>Min side</h2>
    </div>

    <div className="personalInfoContainer">
      <div className="personalInfo">

        <div className="profilePicture">
          <img src={image} alt="Profile"/>
        </div>

        <div className="information">
          <p>Navn: {name}</p>
          <p>Bruker opprettet: {Moment(date).fromNow()}</p>
          <br/>
          <p>Antall innlegg skrevet: {posts}</p>
          <p>Antall kommentarer skrevet: {comments}</p>
        </div>

      </div>

      <div className="logout">
        {loggOutButton ? <Link to="/"><div className="logoutButton">Logg ut</div></Link> : null}
      </div>
    </div>

    <div className="stats">
      <div className="lastVisited">
        <h2>Sist besøkte innlegg</h2>
        <ul className="lastVisitedList">
        {last_visited.map((last)=>(
          <li key={last._id}><Link to={"/posts/" + last._id}><span>{last.title}</span></Link></li>
          )
        )}
        </ul>
      </div>

      <div className="contributionGraph">
        <h2>Bidrag per måned</h2>
        <GraphContainer />
      </div>
    </div>
  </div>
);

export default Profile;
