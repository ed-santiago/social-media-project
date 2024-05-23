import React, { useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Friends from "./components/Friends";
import FriendDetails from "./components/FriendDetails";
import User from "./components/User";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    profilePicture: "https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg",
    name: "User",
    dob: "2000-01-01",
    address: "123 Street, Suburb, NSW 2000, Australia",
    occupation: "Software Engineer at Google"
  });

  function handleCreatePostClick() {
    setCreatePost(!createPost);
  }

  return (
    <>
      <Switch>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>

        <Route exact path="/">
          <Header onCreatePostClick={handleCreatePostClick} profilePicture={profileDetails.profilePicture} />
          <Home isLoggedIn={isLoggedIn} createPost={createPost} userName={profileDetails.name} userPicture={profileDetails.profilePicture} />
        </Route >

        <Route exact path="/friends/:id">
          <Header profilePicture={profileDetails.profilePicture} />
          <FriendDetails />
        </Route>

        <Route path="/friends">
          <Header profilePicture={profileDetails.profilePicture} />
          <Friends name={profileDetails.name} />
        </Route>

        <Route path="/user">
          <Header profilePicture={profileDetails.profilePicture} />
          <User profileDetails={profileDetails} setProfileDetails={setProfileDetails} name={profileDetails.name} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
