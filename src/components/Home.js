import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Home({ isLoggedIn, createPost }) {
  const [postsArray, setPostsArray] = useState([]);

  const createPostComponent = createPost ? <CreatePost onAddPost={handleAddPost} /> : null;

  function handleAddPost(newPost) {
    setPostsArray([newPost, ...postsArray])
  }

  function handleUpdatedPost(updatedPost) {
    const updatePost = postsArray.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPostsArray(updatePost);
  }

  function handleDeletePost(deletedPost) {
    const deletePost = postsArray.filter((post) => post.id !== deletedPost.id);
    setPostsArray(deletePost);
  }

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/posts`)
      .then((res) => res.json())
      .then((posts) => setPostsArray(posts.reverse()))
  }, [postsArray])

  const postElement = postsArray.map((postItem) => {
    const { id, profilePicture, name, post, media, likes, liked, comments } = postItem;
    return (
      <Posts
        key={id}
        id={id}
        profilePicture={profilePicture}
        name={name}
        post={post}
        media={media}
        likes={likes}
        liked={liked}
        comments={comments}
        onUpdatedPost={handleUpdatedPost}
        onDeletePost={handleDeletePost}
      />
    );
  });

  if (!isLoggedIn) return <Redirect to="/login" />

  return (
    <main>
      {createPostComponent}
      {postElement}
    </main>
  );
}

export default Home;