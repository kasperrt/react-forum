import React from 'react';

const NewPost = ({posted, showPost, addNewPost, handleTitleChange, handleDescriptionChange}) => (
  <div id="new_post">
    {showPost && !posted ?
      <div className="new_post">
        <input type="text" name="title" className="newPostTitle" placeholder="Title" onChange={handleTitleChange} />
        <textarea className="new_post_text" placeholder="What's on your mind?" onChange={handleDescriptionChange}>
        </textarea>
      </div>
      : null}
    {posted ?
      <div className="success {!posted ? 'hidden' : ''}">Posted</div>
      : null }
    <a href="#" className="new_post_button { showButton ? 'hidden' : '' }" onClick={() => addNewPost()}>Nytt Innlegg</a>
  </div>
);

export default NewPost;
