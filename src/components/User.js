import React, {useState} from "react";
import UserDetails from "./UserDetails";
import UserEditDetails from "./UserEditDetails";
import "../css/user.css";

function User({ profileDetails, setProfileDetails }) {
  const [edit, setEdit] = useState(false);
  const [editProfile, setEditProfile] = useState(profileDetails);

  function handleChange(e) {
    setEditProfile({
      ...editProfile,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProfileDetails(editProfile);
    setEdit(false);
  }

  const editProfileDetails = edit ? 
    <UserEditDetails editProfile={editProfile} onChange={handleChange} onSubmit={handleSubmit} /> : 
    <UserDetails profileDetails={profileDetails} />

  return (
    <div id="user">
      <div id="user_header">
        <img src={profileDetails.profilePicture} alt="" />
        <div>
          <h1>{profileDetails.name}</h1>
          <div id="user_friend_amount">
            <p><b>Friends:</b> 425</p>
            <p id="user_edit" onClick={() => setEdit(true)}>Edit</p>
          </div>
        </div>
      </div>

      {editProfileDetails}
    </div>
  );
}

export default User;