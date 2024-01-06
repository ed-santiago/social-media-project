import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function FriendDetails() {
  const [friendDetails, setFriendDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/users/${id}`)
      .then((r) => r.json())
      .then((friend) => setFriendDetails(friend))
  }, [])

  const { name, profilePicture, dob, address, friends, workplace, friend } = friendDetails;

  return (
    <div>
      
      <img src={profilePicture} />
      <h1>Friend Details</h1>
    </div>
  );
}

export default FriendDetails;