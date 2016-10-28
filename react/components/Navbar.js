import React from 'react';
import ReactRouter, {Link} from 'react-router';

const Navbar = ({currentUserId}) => (
  <div id="navbar">
    <div id="content">

      <ul className="navbarElement" id="navbarLeft">
        <li><Link to="/">HOW TO: ADULT</Link></li>
      </ul>

      <ul className="navbarElement">
        <li><input type="text" placeholder="Søk..."/></li>
        <li><Link to={"/user/" + currentUserId} className="btn">Min side</Link></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
