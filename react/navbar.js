var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');


var Navbar = React.createClass({
	render : function () {
		return (
			<div id="navbar">
				<div id="content">
					<ul className="navbarElement" id="navbarLeft">
						<li><ReactRouter.Link to="/">HOW TO: ADULT</ReactRouter.Link></li>
					</ul>
				
					<ul className="navbarElement">
						<li><input type="text" placeholder="Søk..."/></li>
						<li><ReactRouter.Link to="/profile" className="btn">Min side</ReactRouter.Link></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Navbar;