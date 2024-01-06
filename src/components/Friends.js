import React, { useState, useEffect } from "react";

function Friends() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    fetch("https://social-media-project-s52o.onrender.com/users")
      .then((r) => r.json())
      .then((friends) => setFriendList(friends))
  }, [])

  const friendElement = friendList.map((individualFriend) => {
    const { id, name, profilePicture, dob, address, friends, workplace, friend } = individualFriend;

    return (
      <div id="individual_friend" key={id}>
        <img src={profilePicture} />
        <div id="friend_info">
          <h2>{name}</h2>
          <button>REMOVE</button>
        </div>
      </div>
    );
  })

  return (
    <div id="friends">
      <div id="friends_header">
        <img src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg" />
        <h1 style={{ fontSize: "48px" }}>Edmond's Friend List</h1>
      </div>

      <div id="friend_list">
        {friendElement}
      </div>
    </div>
  );
}

export default Friends;