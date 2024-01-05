import React, { useState } from "react";
import CommentModal from "./CommentModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faThumbsUp, faComment, faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons'

function Posts({ profilePicture, name, post, media, likes, comments }) {
  const [openModal, setOpenModal] = useState(false);

  const postImage = media.length > 0 ? <img id="posts_media" src={media} alt="post image" /> : null;

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
        <div id="like">
          <FontAwesomeIcon icon={faThumbsUp} />
          <p>Like</p>
        </div>
        <div id="comment">
          <FontAwesomeIcon icon={faComment} />
          <p>Comment</p>
        </div>
      </div>
      <CommentModal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}

export default Posts;