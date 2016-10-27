import React from 'react';

const NewPost = ({posted, showPost, addNewPost, handleTitleChange, handleDescriptionChange}) => (
  <div id="new_post">
    <div className="new_post before_posted {!showPost && posted ? 'hidden' : '' }">
      <input type="text" name="title" placeholder="Title of post" onChange={() => handleTitleChange()} />
      <textarea className="new_post_text" placeholder="Description.." onChange={() => handleDescriptionChange()}>
      </textarea>
    </div>
    <div className="success {!posted ? 'hidden' : ''}">Posted</div>
    <a href="#" className="new_post_button { showButton ? 'hidden' : '' }" onClick={() => addNewPost()}>Nytt Innlegg</a>
  </div>
);

export default NewPost;