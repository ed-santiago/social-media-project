import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faHouse, faRightFromBracket, faBell } from '@fortawesome/free-solid-svg-icons'
import "../css/header.css"

function Header({ onCreatePostClick }) {
  return (
    <header>

      <div id="header_left">
        <h1>E</h1>
        <NavLink to="/login">
          <FontAwesomeIcon id="logout_icon" icon={faRightFromBracket} />
        </NavLink>
        <NavLink exact to="/">
          <FontAwesomeIcon id="home_icon" icon={faHouse} />
        </NavLink>
      </div>

      <button onClick={onCreatePostClick}>Create a post</button>

      <div>
        <FontAwesomeIcon id="notification_icon" icon={faBell} />
        <NavLink to="/friends">
          <FontAwesomeIcon id="friend_icon" icon={faUserGroup} />
        </NavLink>
        <NavLink to="/user">
          <img src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg" />
        </NavLink>
      </div>

    </header>
  );
}

export default Header;