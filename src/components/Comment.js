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
      <input id="addComment" type="text" name="add_comment" placeholder="Add a comment" />
    </div>
  );
}

export default Comment;