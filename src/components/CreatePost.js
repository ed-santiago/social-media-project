import React from "react";

function CreatePost() {
  return (
    <div>
      <h4>Create a post</h4>
      <hr />
      <textarea type='text' name='textareaPost' placeholder="What's on your mind, User?" rows="4" cols="50" />
      <input type='text' name='inputURLPost' placeholder="import image URL"/>
      <button>Post</button>
    </div>
  );
}

export default CreatePost;