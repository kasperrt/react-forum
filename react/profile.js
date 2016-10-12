var React = require('react');
var ReactRouter = require('react-router');

var Profile = React.createClass({
	render : function (){
		return (
			<div className="content">
				<div id="layer1" className="layers">
					<ul>
						<li><h2>Min side</h2></li>
						<li id="rightLi" style={{float: "right"}}><ReactRouter.Link to="/" className="btnRed">Logg ut</ReactRouter.Link></li>
					</ul>
				</div>
				<div id="layer2" className="layers">
					<img src="http://madmobilenews.com/wp-content/uploads/2013/01/generic_user_image.jpg" alt="Profile"/>
					<div className="layerDiv">
						<p>Navn: </p>
						<p>Bruker opprettet: </p>
						<br/>
						<p>Antall innlegg skrevet: </p>
						<p>Antall kommentarer skrevet: </p>
					</div>
				</div>
				<div id="layer3" className="layers">
					<div className="layerDiv">
						<h2>Sist besøkte innlegg</h2>
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