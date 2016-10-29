import React from 'react';
import ReactRouter, {Link} from 'react-router';

const Profile = ({loggOutButton, name, date, posts, comments}) => (
  <div className="content">
    <div id="layer1" className="layers">
      <ul>
        <li><h2>Min side</h2></li>
        {loggOutButton ? <li id="rightLi" style={{float: "right"}}><Link to="/" className="btnRed"><span>Logg ut</span></Link></li> : null}
      </ul>
    </div>
    <div id="layer2" className="layers">
      <img src="http://madmobilenews.com/wp-content/uploads/2013/01/generic_user_image.jpg" alt="Profile"/>

      <div className="layerDiv">
        <p>Navn: {name}</p>
        <p>Bruker opprettet: {date}</p>
        <br/>
        <p>Antall innlegg skrevet: {posts}</p>
        <p>Antall kommentarer skrevet: {comments}</p>
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
        <img src="http://www.datavizcatalogue.com/methods/images/top_images/line_graph.png" alt="graph" />
      </div>
    </div>
  </div>
);

export default Profile;
