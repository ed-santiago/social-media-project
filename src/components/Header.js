import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>

      <h1>E</h1>

      <form>
        <input id="input-field" type='text' name='search' placeholder="Search Product" />
        <button id="submit-btn" type='submit' name='submit' value="">Search</button>
      </form>

      <FontAwesomeIcon icon={faUser} className="icons" />

    </header>
  );
}

export default Header;