import React, { useState } from "react";
import "../css/comment.css"

function Comment({ id, comments, userName, setCommentCount }) {
  const [newComment, setNewComment] = useState("");
  const [commentArray, setCommentArray] = useState(comments);

  const commentElement = commentArray.map((commentList, index) => {
    const { name, comment } = commentList
    return (
      <div key={index + 1} id="comments">
        <p style={{ fontWeight: "bold", padding: "0", fontSize:"15px"}}>{name}</p>
        <p style={{padding: "0", fontSize:"15px"}}>{comment}</p>
      </div>
    );
  })

  function handleNewCommentChange(e) {
    setNewComment(e.target.value);
  }

  function handleSubmit(e) {
    const newCommentData = {
      name: userName,
      comment: newComment
    }

    if (e.key === "Enter") {
      fetch(`https://social-media-project-s52o.onrender.com/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: [...comments, newCommentData]
        })
      })
        .then((r) => r.json())
        .then((updateComment) => {
          setCommentArray(updateComment.comments);
          setNewComment("");
          setCommentCount(updateComment.comments.length);
        })
    }
  }

  return (
    <div>
      {commentElement}
      <input
        id="add_comment"
        type="text"
        name="addComment"
        value={newComment}
        onChange={handleNewCommentChange}
        onKeyDown={handleSubmit}
        placeholder="Add a comment"
      />
    </div>
  );
}

export default Comment;