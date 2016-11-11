# React Documentation

#### Main

- Main includes react, react-dom and react-router. React and react-dom is used for rendering, and access the functions in react, while react-router is used for links.

- Main.js also includes navbar, frontpage, profile and thread, which are different components/react-classes the site uses.

- Posts.js and users.js is two files that works sort of like a database, but they can’t be changed by the user. This makes it easier to further develop the site, since we’re already using “dynamic” variables.

- It’s three event-handlers in main.js, one for posts, one for thread and one for profile. These are used for easier sending in variables to the wanted class. This is done with having a handler as the component attribute in the ReactRouter.Router, and send in the variables and attributes in with the declaration of the elements. One example is:

        render: function() {
            return(<Profile hash={this.props.params.userId} />);
  	    }

  Here hash is a parameter being sent in is the variable fetched from the URL  (/user/:userId)

- The react-class App functions as the main-class on the site, since it includes <Navbar />, and then render all the children sent in as children when declared.

- ReactDOM.render is the function that renders everything on the website. In here lies the Router-handler; ReactRouter. ReactRouter.Route handles the different paths of the website, and IndexRoute is for whats the index of the given path. Since App contains only children sent in, and the Navbar, this was decided to be the IndexRouter.

- React.DOM.render takes two parameters, where the first one is _what_ to render, and the last is _where_ to render it.

#### Frontpage

- Frontpage.js also includes react and react-router and users.js. Users.js is used to fetch what the users fullname is instead of just rendering the userid.

- showPost is a boolean variable which decides whether the inputfields of a new post is to be shown, while posted is used to check whether the user has posted a new post.

- Frontpage.js is the file being used to show the frontpage, and it also contains the NewPost and Posts classes. In the end of the file, it’s exported for ease of use.

- NewPost is a bigger class, which contains two eventlisteners for when the two inputfields for a new post is being changed. This is done with this.setState({title: e.target.value});

- In the render function, there are two if-test, to see if the new post button has been clicked, what to display, and whether the post has been posted or not. If it’s posted, the title and description is added to the beginning of the post array. This results to the frontpage being updated and rendered at the same time.

- The new post button has a listener for a click-event, which changes what showPost and posted is, depending on what their already set values.

- The posts-class gets all the posts from a attribute in main, which it loops through:

        this.props.posts.map(function(post){ .. };

    And returns all the posts as html code.

- In main.js we defined /user/:userId as a route, we can use /user/:userId as router links to the different posts. The same can be done with /posts/:post_hash

- Then Posts returns {postsComponents} inside a div (this because a react element must have a super-container), ready for rendering.

#### Thread

- Thread includes react og react-router just like the other files.

- Posts.js is used to get any data about the post and its comments.

- Comments is a react class which is used to get the comments of the chosen thread. This is done almost exactly like in the Posts class in Frontpage, by using the map function.

- Thread is the react class used to render everything that is shown on the page and uses the Comments class to display the comments.

- There is currently no functionality to create any new comments yet on the thread page.

#### “Min side” (profile.js):

- Like the other files profile.js includes react og react-router. It also includes user.js which is used to display the profile of the author of a post.

- To distinguish between the display of the author of a post and the user’s profile the profile.js takes in the prop hash. This is used to show the right information of the user and display/hide the logout button. 

- "Last visited posts" is an overview of the user’s last visited and commented posts. With “<ReactRouter.Link to="/posts/the_post_to_rout_to">” the user is router to post. As right now they are two hard-coded posts from posts.js (post_hash1 and post_hash2).

- The “graph over activity” is currently an image. Later on this will show a dynamic graph over the user’s activity (writing and commenting posts) 

#### Navbar

- Includes react og react-router just like the other files. 

- The navbar is displayed on all pages do to the App class render function in main.js.

- It routs between frontpage.js and profile.js with “ReactRouter.Link” with the path defined in ReactDOM.render in main.js.

- The navbar also contains a search box, which in this prototype does not have any functionality.