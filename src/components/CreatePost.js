import React, { useState } from "react";
import "../css/createPost.css";

function CreatePost({ onAddPost }) {
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
    const data = {
      profilePicture: "https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg",
      name: "Edmond Santiago",
      post: postData.post,
      media: postData.imgURL,
      likes: 0,
      comments: [],
    };
    fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((newPost) => {
        onAddPost(newPost)
        setPostData({
          post: "",
          imgURL: ""
        })
      })
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