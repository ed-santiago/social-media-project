import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Home({isLoggedIn}) {
  if(!isLoggedIn) return <Redirect to="/login" />

  return (
      <h1>Home</h1>
  );
}

export default Home;