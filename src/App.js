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
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/">
          <Header isLoggedIn={isLoggedIn} onCreatePostClick={handleCreatePostClick} profilePicture={profileDetails.profilePicture} />
        </Route>
      </Switch>

      <Route path="/home">
        <Home createPost={createPost} userName={profileDetails.name} userPicture={profileDetails.profilePicture} />
      </Route >

      <Switch>
        <Route path="/friends/:id">
          <FriendDetails />
        </Route>

        <Route path="/friends">
          <Friends name={profileDetails.name} profilePicture={profileDetails.profilePicture} />
        </Route>
      </Switch>

      <Route path="/user">
        <User profileDetails={profileDetails} setProfileDetails={setProfileDetails} name={profileDetails.name} />
      </Route>
    </>
  );
}

export default App;
