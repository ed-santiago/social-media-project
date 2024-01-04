import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Posts({ profilePicture, name, post, media, likes, comments }) {

  return (
    <div id="posts">
      <div id="post_header">
        <div id="pic_name">
          <img id="profile_picture" src={profilePicture} />
          <p>{name}</p>
        </div>
        <FontAwesomeIcon id="x_button" icon={faXmark}/>
      </div>
    </div>
  );
}

export default Posts;