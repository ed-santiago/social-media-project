import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Posts({ profilePicture, name, post, media, likes, comments }) {

  const postImage = media.length > 0 ? <img id="posts_media" src={media} alt="post image" /> : null;

  return (
    <div id="posts">
      <div id="post_header">
        <div id="pic_name">
          <img id="profile_picture" src={profilePicture} />
          <p>{name}</p>
        </div>
        <FontAwesomeIcon id="x_button" icon={faXmark}/>
      </div>
      <p>{post}</p>
      {postImage}
      <hr />
      <div>
        
      </div>
    </div>
  );
}

export default Posts;