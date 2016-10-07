

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');


var Navbar = React.createClass({
	render : function () {
		return (
			<div>
				<div id="navbar">
					<div id="content">
						<ul id="navbarLeft">
							<li><ReactRouter.Link to="/test">HOW TO: ADULT</ReactRouter.Link></li>
						</ul>
					
						<ul id="navbarRight">
							<li><input type="text"/></li>
							<li><ReactRouter.Link to="/test">Min side</ReactRouter.Link></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Navbar;