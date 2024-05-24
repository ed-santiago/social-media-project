import React from "react";
import "../css/userEditDetails.css";

function UserEditDetails({ editProfile, onChange, onSubmit }) {
  const { profilePicture, name, dob, address, occupation } = editProfile;

  return (
    <form id="edit_form" onSubmit={onSubmit}>
      <div id="save_edit">
        <h2>Edit Profile</h2>
        <button id="save" type="submit">Save</button>
      </div>

      <label htmlFor="profilePicture">Profile Picture: </label>
      <input id="profilePicture" type="url" name="profilePicture" value={profilePicture} onChange={onChange} /><br />

      <label htmlFor="name">Name: </label>
      <input id="name" type="text" name="name" value={name} onChange={onChange} /><br />

      <label htmlFor="dob">Date Of Birth: </label>
      <input id="dob" type="date" name="dob" value={dob} onChange={onChange} /><br />

      <label htmlFor="address">Address: </label>
      <input id="address" type="text" name="address" value={address} onChange={onChange} /><br />

      <label htmlFor="occupation">Occupation: </label>
      <input id="occupation" type="text" name="occupation" value={occupation} onChange={onChange} /><br />
    </form>
  );
}

export default UserEditDetails;