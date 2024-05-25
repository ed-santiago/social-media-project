import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../css/friends.css"

function Friends({name, profilePicture}) {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/users`)
      .then((r) => r.json())
      .then((friends) => setFriendList(friends))
  }, [])

  function handleRemoveFriend(id) {
    const updateFriendList = friendList.filter((friend) => friend.id !== id);
    setFriendList(updateFriendList);
  }

  const friendElement = friendList.map((individualFriend) => {
    const { id, name, profilePicture } = individualFriend;

    function handleRemoveClick() {
      fetch(`https://social-media-project-s52o.onrender.com/users/${id}`, {
        method: "DELETE"
      })
        .then((r) => r.json())
        .then(() => handleRemoveFriend(id))
    }

    return (
      <div id="individual_friend" key={id}>
        <Link to={`/friends/${id}`}>
          <img src={profilePicture} alt="" />
        </Link >
        <div id="friend_info">
          <h2>{name}</h2>
          <button onClick={handleRemoveClick}>REMOVE</button>
        </div>
      </div>
    );
  })

  return (
    <div id="friends">
      <div id="friends_header">
        <img src={profilePicture} alt="" />
        <div id="user_name">
          <h1>{`${name}'s`}</h1>
          <h2>Friend List</h2>
        </div>
      </div>

      <div id="friend_list">
        {friendElement}
      </div>
    </div>
  );
}

export default Friends;