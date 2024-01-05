import React, { useState } from "react";
import Comment from "./Comment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'

function Posts({ profilePicture, name, post, media, likes, comments }) {
  const [openComment, setOpenComment] = useState(false);
  const [like, setLike] = useState(likes);

  const postImage = media.length > 0 ? <img id="posts_media" src={media} alt="post image" /> : null;

  const showComment = openComment ? <Comment comments={comments}/> : null;

  function handleLike() {
    fetch("https://social-media-project-s52o.onrender.com/posts", {
      method: "PATCH"
    })
  }

  function handleCommentClick() {
    setOpenComment((openComment) => !openComment);
  }

  return (
    <div id="posts">
      <div id="post_header">
        <div id="pic_name">
          <img id="profile_picture" src={profilePicture} />
          <p>{name}</p>
        </div>
        <FontAwesomeIcon id="x_button" icon={faXmark} />
      </div>
      <p>{post}</p>
      {postImage}
      <div id="like_comment_amount">
        <div>
          {likes}
          <p>likes</p>
        </div>
        <div>
          {comments.length}
          <p>comments</p>
        </div>
      </div>
      <hr />
      <div id="like_comment">
        <div id="like"  onClick={handleLike}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <p>Like</p>
        </div>
        <div id="comment" onClick={handleCommentClick}>
          <FontAwesomeIcon icon={faComment} />
          <p>Comment</p>
        </div>
      </div>
      {showComment}
    </div>
  );
}

export default Posts;