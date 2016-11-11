import React from 'react';
import ReactRouter, {Link} from 'react-router';
import cookie from 'react-cookie';

const Navbar = ({currentUserId, search, handleChange, value, loggout}) => (
  <div id="navbar">
    <div className="navbarLeft">
      <Link to="/" id="logo"><div>How to: adult</div></Link>
    </div>
    <div className="navbarRight">
      <div className="search">
        <form className="searchForm" onSubmit={search}>
          <input type="text" value={value} onChange={handleChange} placeholder="Søk..." />
        </form>
      </div>
      <div className="myProfileButton">
        {cookie.load('user') ? <Link to={"/user/"}>Min side</Link> : <a href="/profile">Min side</a>}
      </div>
      <div className="logout">
        {cookie.load('user') ? <button className="logoutButton" onClick={() => loggout()}>Logg ut</button> : null}
      </div>
    </div>

  </div>
);

export default Navbar;
