var React = require('react');
var ReactRouter = require('react-router');
var users = require('./users.js');

var Profile = React.createClass({		// Creates a new class containing all the elements of profile
	render : function (){				// Render function, return the JSX ("HTML") to be displayed
		var hash = this.props.hash;		// Profil.js takes in the props (parameter) hash, tells which user to show
		var user = users.filter(function( obj ) {		// Finds the right user matching hash
      return obj.userid == hash;
    });
    user = user[0];

		var name = user.name;      		// variable for the user/authors name
		var date = user.date;			// variable for the date the user created the account 
		var posts = user.posts;			// variable for how many posts the user has posted
		var comments = user.comments;	// variable for how many comments the user has written 

		var loggOutButton;		// variable conteining the logg out button

		/* 
			Check if profil.js shows the user's profile or an author
			If the hash is "u1" it's shows the user's profile with loggOutButton
			Else the loggOutButton variable will be null
		*/
		if(hash == "u1"){		
			// On click will rout to frontapage with the ReactRouter path defined in main.js (ReactDOM.render)
			loggOutButton = <li id="rightLi" style={{float: "right"}}><ReactRouter.Link to="/" className="btnRed">Logg ut</ReactRouter.Link></li>;
		}

		return (
			<div className="content">
				<div id="layer1" className="layers">
					<ul>
						<li><h2>Min side</h2></li>
						{loggOutButton}              // Will only be displayed if profile.js shows the user's profile
					</ul>
				</div>
				<div id="layer2" className="layers">
					// Profile picture 
					<img src="http://madmobilenews.com/wp-content/uploads/2013/01/generic_user_image.jpg" alt="Profile"/>

					// User information 
					<div className="layerDiv">
						<p>Navn: {name}</p>
						<p>Bruker opprettet: {date}</p>
						<br/>
						<p>Antall innlegg skrevet: {posts}</p>
						<p>Antall kommentarer skrevet: {comments}</p>
					</div>
				</div>
				<div id="layer3" className="layers">
					// Last viewed posts
					<div className="layerDiv">
						<h2>Sist besøkte innlegg</h2>
						<ul className="lastUl">
							// Routs to the posts, post_hash1 and post_hash2 from posts.js
							<li><ReactRouter.Link to="/posts/post_hash1">IRONING</ReactRouter.Link></li>
							<li><ReactRouter.Link to="/posts/post_hash2">PARENTING</ReactRouter.Link></li>
						</ul>
					</div>

					// Graph over activity
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
