import React, {useState} from "react";
import UserDetails from "./UserDetails";
import UserEditDetails from "./UserEditDetails";
import "../css/user.css";

function User() {
  const [edit, setEdit] = useState(false);

  const editProfile = edit ? <UserEditDetails /> : <UserDetails />

  return (
    <div id="user">
      <div id="user_header">
        <img src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg" />
        <div>
          <h1>User User</h1>
          <div id="user_friend_amount">
            <p><b>Friends:</b> 425</p>
            <p id="user_edit" onClick={() => setEdit(!edit)}>Edit</p>
          </div>
        </div>
      </div>

      {editProfile}
    </div>
  );
}

export default User;