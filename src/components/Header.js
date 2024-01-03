import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>

      <h1>E</h1>

      <form>
        <input type='text' name='search' placeholder="Search User" />
      </form>

      <FontAwesomeIcon icon={faUser} className="icons" />

    </header>
  );
}

export default Header;