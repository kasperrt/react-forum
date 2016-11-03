import React from 'react';
import ReactRouter, {Link} from 'react-router';

const Navbar = ({currentUserId}) => (
  <div id="navbar">

    <div className="navbarLeft">
      <Link to="/"><div id="logo">How to: adult</div></Link>
    </div>

    <div className="navbarRight">
      <div className="search">
        <input type="text" placeholder="Søk..."/>
      </div>
      <div className="myProfileButton">
        <Link to={"/user/"}>Min side</Link>
      </div>
    </div>

  </div>
);

export default Navbar;
