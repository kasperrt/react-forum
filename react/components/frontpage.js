import React from 'react';
import Posts from './Posts';
import NewPostContainer from './containers/newPostContainer';

const Frontpage = ({posts, users}) => (
  <div>
    <NewPostContainer posts={posts} />                 //Using a NewPost class element, with all posts as attribute and value
    <div className="frontpage_posts">
      <Posts posts={posts, users}>           //Renders the children sent in with Posts class.
      </Posts>
    </div>
  </div>
);

export default Frontpage