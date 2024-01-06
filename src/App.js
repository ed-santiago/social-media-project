import React, { useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Friends from "./components/Friends";
import FriendDetails from "./components/FriendDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  function handleCreatePostClick() {
    setCreatePost(!createPost);
  }

  return (
    <>
      <Route path="/login">
        <Login setIsLoggedIn={setIsLoggedIn} />
      </Route>

      <Route exact path="/">
        <Header onCreatePostClick={handleCreatePostClick}/>
        <Home isLoggedIn={isLoggedIn} createPost={createPost} />
      </Route >

      <Route path="/friends">
        <Header />
        <Friends />
      </Route>

      <Route exact path="/friends/:name">
        <Header />
        <FriendDetails />
      </Route>
    </>
  );
}

export default App;
