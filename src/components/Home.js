import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Home({ createPost, userName, userPicture }) {
  const [postsArray, setPostsArray] = useState([]);

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/posts`)
      .then((res) => res.json())
      .then((posts) => setPostsArray(posts.reverse()))
  }, [])

  const createPostComponent = createPost ? <CreatePost onAddPost={handleAddPost} userName={userName} userPicture={userPicture} /> : null;

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

  const postElement = postsArray.map((postItem) => {
    return (
      <Posts
        key={postItem.id}
        postItem={postItem}
        onUpdatedPost={handleUpdatedPost}
        onDeletePost={handleDeletePost}
        userName={userName}
        userPicture={userPicture}
      />
    );
  });

  return (
    <main>
      {createPostComponent}
      {postElement}
    </main>
  );
}

export default Home;