import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "../css/friendDetails.css";

function FriendDetails() {
  const [friendDetails, setFriendDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/users/${id}`)
      .then((r) => r.json())
      .then((friend) => setFriendDetails(friend))
  }, [])

  const { name, profilePicture, dob, address, friends, workplace } = friendDetails;

  return (
    <div id="friend_details">
      <div id="friend_details_header">
        <img src={profilePicture} alt="" />
        <div>
          <h1>{name}</h1>
          <div id="friend_amount">
            <p><b>Friends:</b> {friends}</p>
            <p id="if_friend">Friend</p>
          </div>
        </div>
      </div>
      <div id="friend_details_body">
        <p><b>Date Of Birth:</b> {dob}</p>
        <p><b>Address:</b> {address}</p>
        <p><b>Occupation:</b> {workplace}</p>
      </div>
    </div>
  );
}

export default FriendDetails;