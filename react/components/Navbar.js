import React from 'react';
import ReactRouter, {Link} from 'react-router';

const Navbar = ({currentUserId}) => (
  <div id="navbar">
    <div id="content">

      <ul className="navbarElement" id="navbarLeft">
        <li><Link to="/"><span>HOW TO: ADULT</span></Link></li>
      </ul>

      <ul className="navbarElement">
        <li><input type="text" placeholder="Søk..."/></li>
        <li><Link to={"/user/"} className="btn"><span>Min side</span></Link></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
