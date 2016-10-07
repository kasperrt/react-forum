var React = require('react');
var ReactDOM = require('react-dom');

var Navbar = React.createClass({
	render : function () {
		return (
				<div>
					<div id="navbar">
						<div id="content">
							<ul id="navbarLeft">
								<li><a href="#">HOW TO: ADULT</a></li>
							</ul>
						
							<ul id="navbarRight">
								<li><input type="text"></li>
								<li><a href="#">Min side</a></li>
							</ul>
					</div>
				</div>
		);
	}
});

ReactDOM.render(
<Navbar />,
  document.getElementById('navbar')
	);
