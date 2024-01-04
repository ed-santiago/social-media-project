import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CreatePost from "./CreatePost";

function Home({ isLoggedIn }) {
  const [postsArray, setPostsArray] = useState([]);

  if (!isLoggedIn) return <Redirect to="/login" />

  return (
    <main>
      <CreatePost />
    </main>
  );
}

export default Home;