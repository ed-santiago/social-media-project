import React, { useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      <Route path="/login">
        <Login setIsLoggedIn={setIsLoggedIn} />
      </Route>

      <Route exact path="/">
        <Home isLoggedIn={isLoggedIn}/>
      </Route >
    </main>
  );
}

export default App;
