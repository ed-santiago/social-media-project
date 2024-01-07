import React from "react";
import "../css/user.css";

function User() {
  return (
    <div id="user">
      <div id="user_header">
        <img src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg" />
        <div>
          <h1>Edmond Santiago</h1>
          <div id="user_friend_amount">
            <p><b>Friends:</b> 425</p>
            <p id="user_edit">Edit</p>
          </div>
        </div>
        
      </div>
      <div id="user_body">
          <p><b>Date Of Birth:</b> 29/04/1999</p>
          <p><b>Address:</b> 123 Street, Suburb, NSW 2000, Australia</p>
          <p><b>Occupation:</b> Software Engineer at Google</p>
        </div>
    </div>
  );
}

export default User;