import React from "react";

function UserEditDetails() {
  return (
    <form>
      <h2>Edit Profile</h2>
      <button type="submit">Save</button>

      <label for="dob">Date Of Birth: </label>
      <input id="dob" type="date" name="dob" value="" />

      <label for="address">Address: </label>
      <input id="address" type="text" name="address" value="" />

      <label for="occupation">Occupation: </label>
      <input id="occupation" type="text" name="occupation" value="" />
    </form>
  );
}

export default UserEditDetails;