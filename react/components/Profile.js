import React from 'react';
import ReactRouter, {Link} from 'react-router';
import GraphContainer from '../containers/GraphContainer'
import Moment from 'moment';

Moment.locale('nb');

const Profile = ({loggOutButton, name, date, posts, comments}) => (
  <div className="content">
    <div className="title">
        <h2>Min side</h2>
    </div>

    <div className="personalInfoContainer">
      <div className="personalInfo">

        <div className="profilePicture">
          <img src="http://madmobilenews.com/wp-content/uploads/2013/01/generic_user_image.jpg" alt="Profile"/>
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

    <div id="layer3" className="layers">
      <div className="layerDiv">
        <h2>Sist besøkte innlegg</h2>
        <ul className="lastUl">
          <li><Link to="/posts/post_hash1"><span>IRONING</span></Link></li>
          <li><Link to="/posts/post_hash2"><span>PARENTING</span></Link></li>
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
