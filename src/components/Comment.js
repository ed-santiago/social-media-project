import React, { useState } from "react";

function Comment({ comments }) {

  const idk = comments.map((commentList) => {
    const { name, comment } = commentList
    return (
      <div key={name} id="comments">
        <p>{name}</p>
        <p>{comment}</p>
      </div>
    );
  })

  return (
    <div>
      {idk}
    </div>
  );
}

export default Comment;