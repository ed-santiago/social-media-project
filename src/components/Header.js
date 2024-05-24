import React from "react";
import { NavLink, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faHouse, faRightFromBracket, faBell } from '@fortawesome/free-solid-svg-icons'
import "../css/header.css"

function Header({ isLoggedIn, onCreatePostClick, profilePicture }) {
  if (!isLoggedIn) return <Redirect to="/login" />

  return (
    <header>

      <div id="header_left">
        <div id="logo">
          <h1>e</h1>
        </div>
        <NavLink to="/login">
          <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
        </NavLink>
        <NavLink exact to="/home">
          <FontAwesomeIcon className="icon" icon={faHouse} />
        </NavLink>
      </div>

      <button onClick={onCreatePostClick}>Create Post</button>

      <div id="header_right">
        <FontAwesomeIcon className="icon" icon={faBell} />
        <NavLink to="/friends">
          <FontAwesomeIcon className="icon" icon={faUserGroup} />
        </NavLink>
        <NavLink to="/user">
          <img src={profilePicture} alt="" />
        </NavLink>
      </div>

    </header>
  );
}

export default Header;