import React, { useState } from "react";

function Comment({ comments }) {

  const idk = comments.map((commentList) => {
    const { name, comment } = commentList
    return (
      <div key={name} id="comments">
        <p id="comment_name" style={{fontWeight: "bold"}}>{name}</p>
        <p id="comment_comment">{comment}</p>
      </div>
    );
  })

  return (
    <div>
      {idk}
      <input id="add_comment" type="text" name="addComment" placeholder="Add a comment" />
    </div>
  );
}

export default Comment;