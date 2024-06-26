import React, { useState } from "react";
import Comment from "./Comment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'
import "../css/posts.css";

function Posts({ postItem, onUpdatedPost, onDeletePost, userName, userPicture }) {
  const { id, profilePicture, name, post, media, likes, liked, comments } = postItem;

  const [openComment, setOpenComment] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentCount, setCommentCount] = useState(comments.length);

  const postImage = media.length > 0 ? <img id="posts_media" src={media} alt="" /> : null;

  function handleLike() {
    fetch(`https://social-media-project-s52o.onrender.com/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: liked ? likes - 1 : likes + 1,
        liked: !liked
      }),
    })
      .then((r) => r.json())
      .then((updatedPost) => onUpdatedPost(updatedPost))
    setLike(!like);
    setLikeCount(like ? likeCount - 1 : likeCount + 1);
  }

  const thumbStyle = like ? { color: "rgb(24, 119, 242)" } : { color: "gray" };

  function handleCommentClick() {
    setOpenComment((openComment) => !openComment);
  }

  const showComment = openComment ? <Comment id={id} comments={comments} userName={userName} setCommentCount={setCommentCount} /> : null;

  function handleDeletePost() {
    fetch(`https://social-media-project-s52o.onrender.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeletePost(postItem))
  }

  return (
    <div id="posts">
      <div id="post_header">
        <div id="pic_name">
          <img id="profile_picture" src={profilePicture} alt="" />
          <p>{name}</p>
        </div>
        <FontAwesomeIcon id="x_button" icon={faXmark} onClick={handleDeletePost} />
      </div>
      <p id="message">{post}</p>
      {postImage}
      <div id="info">
        <div>
          {likeCount}
          <p>likes</p>
        </div>
        <div>
          {commentCount}
          <p>comments</p>
        </div>
      </div>
      <hr />
      <div id="like_comment">
        <div id="like" onClick={handleLike} style={thumbStyle}>
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