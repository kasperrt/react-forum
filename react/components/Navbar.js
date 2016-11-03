import React from 'react';
import ReactRouter, {Link} from 'react-router';

const Navbar = ({currentUserId, search, handleChange, value}) => (
  <div id="navbar">

    <div className="navbarLeft">
      <Link to="/"><div id="logo">How to: adult</div></Link>
    </div>

    <div className="navbarRight">
      <div className="search">
        <form className="searchForm" onSubmit={search}>
          <input type="text" value={value} onChange={handleChange} placeholder="Søk..." />
        </form>
      </div>
      <div className="myProfileButton">
        <Link to={"/user/"}>Min side</Link>
      </div>
    </div>

  </div>
);

export default Navbar;
