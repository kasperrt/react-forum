var React = require('react');
var ReactRouter = require('react-router');
var all_users = require('./users.js');

var showPost = false; //variable for checking if a new post input fields are to be displayed
var posted = false;   //variable for checking whether a new post was posted locally
var curr_number = 3;  //foo variable for incrementation

var Frontpage = React.createClass({ //Creates new class, which contains all posts, and new post button
  render: function() {                  //rendering function, returns what to be displayed
    return(
      <div>
        <NewPost posts={this.props.posts} />    //Using a NewPost class element, with all posts as attribute and value
        <div className="frontpage_posts">
          <Posts posts={this.props.posts}>      //Rendering Posts class, with all posts as attribute and value
            {this.props.children}               //Renders the children sent in with Posts class.
          </Posts>
        </div>
      </div>
    );
  }
});

var NewPost = React.createClass({               //NewPosts class
  newPost: function() {                         //Function being called when new post button being clicked
    if(!showPost){
      showPost = true;
    } else {
      posted = true;
    }
  },

  handleTitleChange: function(e) {              //Handler for when title is being changed
    this.setState({title: e.target.value});     //updates title variable
  },

  handleDescriptionChange: function(e) {          //Handler for when description is being changed
    this.setState({description: e.target.value}); //Updates description variable
  },

  render: function() {
    var to_add;
    var button = <a href="#" className="new_post_button" onClick={this.newPost}>Nytt Innlegg</a>;   //Button variable to be added

    /*
      If-tests to check if the new post button has been clicked initially, or if
      it's the second time its being clicked. If its the second time, a post is
      posted to the posts variable containing all the posts.
    */

    if(showPost && !posted) {
      to_add = <div className="new_post before_posted">
        <input type="text" name="title" placeholder="Title of post" onChange={this.handleTitleChange} />
        <textarea className="new_post_text" placeholder="Description.." onChange={this.handleDescriptionChange}>
        </textarea>
      </div>;
    } else if(posted) {
      button = "";
      to_add = <div className="success">Posted</div>

      //adds to the beginning of the posts array
      this.props.posts.unshift({id: "post_hash" + curr_number, title: this.state.title, description: this.state.description, time_posted: (new Date()).toString(), author_id: "u1", comments: []});
      curr_number = curr_number + 1;
      posted = false;
      showPost = false;
    }
    return (              //return part of render function, for what to be returned on rendering
      <div id="new_post">
        {to_add}
        {button}
      </div>
    )
  }
});

var Posts = React.createClass({     //Posts class
  render: function() {
    var postsComponents = this.props.posts.map(function(post){    //Loops through posts and applies design for every post on the frontpage
      var author_name = all_users.filter(function( obj ) {        //Applies author_name that goes with the author_id
        return obj.userid == post.author_id;
      });
      author_name = author_name[0].name;
      return (        //returns view of a single post to the whole postsComponent variable
        <div id={post.id} key={post.id} className="post">
          <ReactRouter.Link className="postTitle" to={"posts/" + post.id}> //Link for view of the post
            {post.title}              //Printing post title
          </ReactRouter.Link>
          <div className="postDescription">{post.description}</div>   //printing post description
          <div className="postAuthorContainer">
            Skrevet av &nbsp;
            <ReactRouter.Link className="postAuthor" to={"user/" + post.author_id}>   //link to user that posted the psot
              {author_name}     //printing author name
            </ReactRouter.Link>
          </div>
          <div className="postComments">
            {post.comments.length} kommentarer    //Prints number of comments
          </div>
          <div className="postPosted">Publisert {post.time_posted}</div>    //prints time posted.
        </div>
      );
    });
    return <div>{postsComponents}</div> //renders postComponent, which is all the posts on the frontpage
  }
})

module.exports = Frontpage;       //exports Frontpage variable to any other class/file that require('./frontpage.js'); it
