var React = require('react');
var ReactRouter = require('react-router');
var users = require('./users.js');

var Profile = React.createClass({
	render : function (){
		var hash = this.props.hash;
		var user = users.filter(function( obj ) {
      return obj.userid == hash;
    });
    user = user[0];

		var name = user.name;
		var date = user.date;
		var posts = user.posts;
		var comments = user.comments;

		var loggOutButton;

		if(hash == "u1"){
			loggOutButton = <li id="rightLi" style={{float: "right"}}><ReactRouter.Link to="/" className="btnRed">Logg ut</ReactRouter.Link></li>;
		}

		return (
			<div className="content">
				<div id="layer1" className="layers">
					<ul>
						<li><h2>Min side</h2></li>
						{loggOutButton}
					</ul>
				</div>
				<div id="layer2" className="layers">
					<img src="http://madmobilenews.com/wp-content/uploads/2013/01/generic_user_image.jpg" alt="Profile"/>
					<div className="layerDiv">
						<p>Navn: {name}</p>
						<p>Bruker opprettet: {date}</p>
						<br/>
						<p>Antall innlegg skrevet: {posts}</p>
						<p>Antall kommentarer skrevet: {comments}</p>
					</div>
				</div>
				<div id="layer3" className="layers">
					<div className="layerDiv">
						<h2>Sist besøkte innlegg</h2>
						<ul className="lastUl">
							<li>IRONING</li>
							<li>PARENTING</li>
							<li>MAINTENANCE OF RICE COOKER</li>
						</ul>
					</div>
					<div className="layerDiv">
						<h2>Bidrag per måned</h2>
						<img src="http://www.datavizcatalogue.com/methods/images/top_images/line_graph.png" alt="graph" />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Profile;
