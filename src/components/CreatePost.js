import React from "react";

function CreatePost() {
  return (
    <div id="create_post">
      <h3>Create a post</h3>
      <hr />
      <form>
        <textarea type='text' name='textareaPost' placeholder="What's on your mind, User?" rows="3" cols="50" />
        <input type='text' name='inputURLPost' placeholder="import image URL" />
        <button>Post</button>
      </form>
    </div>
  );
}

export default CreatePost;