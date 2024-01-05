import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Home({ isLoggedIn }) {
  const [postsArray, setPostsArray] = useState([]);

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
      <CreatePost />
      {postElement}
    </main>
  );
}

export default Home;