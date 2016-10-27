import React from 'react';
import ReactRouter from 'react-router';

/*
 *
 *
 *
*/
const Profile = ({hash, user}) => (
  <div className="content">
      <div id="layer1" className="layers">
          <ul>
              <li><h2>Min side</h2></li>
              <li class={hash !== 'u1' ? 'hidden' : ''} id="rightLi" style={{float: "right"}}> // Will only be displayed if profile.js shows the user's profile
                <ReactRouter.Link to="/" className="btnRed">Logg ut</ReactRouter.Link>
              </li>             
          </ul>
      </div>
      <div id="layer2" className="layers">
          // Profile picture 
          <img src="http://madmobilenews.com/wp-content/uploads/2013/01/generic_user_image.jpg" alt="Profile"/>
          // User information 
          <div className="layerDiv">
              <p>Navn: {user.name}</p>
              <p>Bruker opprettet: {user.date}</p>
              <br/>
              <p>Antall innlegg skrevet: {user.posts}</p>
              <p>Antall kommentarer skrevet: {user.comments}</p>
          </div>
      </div>
      <div id="layer3" className="layers">
          // Last viewed posts
          <div className="layerDiv">
              <h2>Sist besøkte innlegg</h2>
              <ul className="lastUl">
                  // Routs to the posts, post_hash1 and post_hash2 from posts.js
                  <li><ReactRouter.Link to="/posts/post_hash1">IRONING</ReactRouter.Link></li>
                  <li><ReactRouter.Link to="/posts/post_hash2">PARENTING</ReactRouter.Link></li>
              </ul>
          </div>
          // Graph over activity
          <div className="layerDiv">
              <h2>Bidrag per måned</h2>
              <img src="http://www.datavizcatalogue.com/methods/images/top_images/line_graph.png" alt="graph" />
          </div>
      </div>
  </div>
);

export default Profile;