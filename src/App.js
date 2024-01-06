import React, { useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Friends from "./components/Friends";

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

      <Route path="/home">
        <Header onCreatePostClick={handleCreatePostClick}/>
        <Home isLoggedIn={isLoggedIn} createPost={createPost} />
      </Route >

      <Route path="/friends">
        <Header />
        <Friends />
      </Route>
    </>
  );
}

export default App;
