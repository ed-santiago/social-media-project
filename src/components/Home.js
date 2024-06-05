import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Home({ createPost, userName, userPicture }) {
  const [postsArray, setPostsArray] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/posts`)
      .then((res) => res.json())
      .then((posts) => {
        setPostsArray(posts.reverse());
        setLoader(false);
      })
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

  const displayLoader = <p id="loader_message">Please allow 30 seconds or so for posts to load as I'm using the free version of Render.</p>

  const displayPosts = loader ? displayLoader : postElement;

  return (
    <main>
      {createPostComponent}
      {displayPosts}
    </main>
  );
}

export default Home;