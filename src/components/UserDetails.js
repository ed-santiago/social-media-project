import React from "react";

function UserDetails({profileDetails}) {
  const {dob, address, occupation} = profileDetails;

  return (
    <div id="user_body">
      <p><b>Date Of Birth: </b>{dob}</p>
      <p><b>Address: </b>{address}</p>
      <p><b>Occupation: </b>{occupation}</p>
    </div>
  );
}

export default UserDetails;