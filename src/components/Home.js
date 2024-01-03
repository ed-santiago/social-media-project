import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";

function Home({isLoggedIn}) {
  if(!isLoggedIn) return <Redirect to="/login" />

  return (
      <Header />
  );
}

export default Home;