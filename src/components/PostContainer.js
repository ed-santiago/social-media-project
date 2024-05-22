import { useState, useEffect } from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

function PostContainer({ createPost }) {
  const [postsArray, setPostsArray] = useState([]);

  const createPostComponent = createPost ? <CreatePost onAddPost={handleAddPost} /> : null;

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/posts`)
      .then((res) => res.json())
      .then((posts) => setPostsArray(posts.reverse()))
  }, [postsArray])

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

  return (
    <div>
      {createPostComponent}
      {postElement}
    </div>
  );
}

export default PostContainer;