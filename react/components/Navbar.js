import React from 'react';
import ReactRouter from 'react-router';

const Navbar = ({currentUserId}) => (
  <div id="navbar">
    <div id="content">
      //"HOW TO: ADULT" home button
      <ul className="navbarElement" id="navbarLeft">
        <li><ReactRouter.Link to="/">HOW TO: ADULT</ReactRouter.Link></li>  //When clicked the user is routed to the frontpage withe the ReactRouter.link
      </ul>

      //Search bar and "Min side" button
      <ul className="navbarElement">
        <li><input type="text" placeholder="Søk..."/></li>	//For this prototype the search bar is included but does not have any functionality implemented
        <li><ReactRouter.Link to{"/user/" + currentUserId} className="btn">Min side</ReactRouter.Link></li>  //"Min side" button will, as the home button rout the user to there profile (profile.js)
      </ul>
    </div>
  </div>
);

export default Navbar;
