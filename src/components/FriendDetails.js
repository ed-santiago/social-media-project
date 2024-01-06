import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function FriendDetails() {
  const [friendDetails, setFriendDetails] = useState(null);
  const {name} = useParams();

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/users/${name}`)
      .then((r) => r.json())
      .then((friend) => setFriendDetails(friend))
  }, [name])

  return (
    <h1>{name}Friend Details</h1>
  );
}

export default FriendDetails;