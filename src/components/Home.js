import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Home({ isLoggedIn }) {
  const [postsArray, setPostsArray] = useState([]);

  function handleAddPost(newPost) {
    setPostsArray([newPost, ...postsArray])
  }

  useEffect(() => {
    fetch("https://social-media-project-s52o.onrender.com/posts")
      .then((res) => res.json())
      .then((posts) => setPostsArray(posts))
  }, [])

  const postElement = postsArray.map((postItem) => {
    const {id, profilePicture, name, post, media, likes, comments } = postItem;
    return (
      <Posts
        key={id}
        id={id}
        profilePicture={profilePicture}
        name={name}
        post={post}
        media={media}
        likes={likes}
        comments={comments}
      />
    );
  });

  if (!isLoggedIn) return <Redirect to="/login" />

  return (
    <main>
      <CreatePost onAddPost={handleAddPost}/>
      {postElement}
    </main>
  );
}

export default Home;