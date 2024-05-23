import React from "react";

function UserEditDetails({editProfile, onChange, onSubmit}) {
  const {profilePicture, name, dob, address, occupation} = editProfile;

  return (
    <form onSubmit={onSubmit}>
      <h2>Edit Profile</h2>
      <button type="submit">Save</button>

      <label htmlFor="profilePicture">Profile Picture: </label>
      <input id="profilePicture" type="url" name="profilePicture" value={profilePicture} onChange={onChange} />

      <label htmlFor="name">Name: </label>
      <input id="name" type="text" name="name" value={name} onChange={onChange} />

      <label htmlFor="dob">Date Of Birth: </label>
      <input id="dob" type="date" name="dob" value={dob} onChange={onChange} />

      <label htmlFor="address">Address: </label>
      <input id="address" type="text" name="address" value={address} onChange={onChange} />

      <label htmlFor="occupation">Occupation: </label>
      <input id="occupation" type="text" name="occupation" value={occupation} onChange={onChange} />
    </form>
  );
}

export default UserEditDetails;