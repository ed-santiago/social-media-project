import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faHouse } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>

      <div id="header_left">
        <h1>E</h1>
        <FontAwesomeIcon id="home_icon" icon={faHouse} />
      </div>

      <form>
        <input type='text' name='search' placeholder="Search User" />
      </form>

      <div>
        <FontAwesomeIcon id="friend_icon" icon={faUserGroup} />
        <img src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg" />
      </div>

    </header>
  );
}

export default Header;