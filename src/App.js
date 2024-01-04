import React, { useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Route path="/login">
        <Login setIsLoggedIn={setIsLoggedIn} />
      </Route>

      <Route exact path="/">
        <Header />
        <Home isLoggedIn={isLoggedIn}/>
      </Route >
    </>
  );
}

export default App;
