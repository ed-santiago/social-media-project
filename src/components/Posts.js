import React from "react";

function Posts({ profilePicture, name, post, media, likes, comments }) {

  return (
    <div>
      <div>
        <img src={profilePicture} />
        <p>{name}</p>
        <button>x</button>
      </div>
    </div>
  );
}

export default Posts;