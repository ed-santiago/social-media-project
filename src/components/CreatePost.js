import React, { useState } from "react";

function CreatePost() {
  const [postData, setPostData] = useState({
    post: "",
    imgURL: "",
  });

  function handleChange(e) {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="create_post">
      <h3>Create a post</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <textarea
          type='text'
          name='post'
          value={postData.post}
          onChange={handleChange}
          placeholder="What's on your mind, User?"
          rows="3"
          cols="50"
        />
        <input
          type='text'
          name='imgURL'
          value={postData.imgURL}
          onChange={handleChange}
          placeholder="import image URL"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;