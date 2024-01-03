import React from "react";

function Header() {
  return (
    <header>

      <h1>E</h1>

      <form>
        <input id="input-field" type='text' name='search' placeholder="Search Product" />
        <button id="submit-btn" type='submit' name='submit' value="">Search</button>
      </form>

    </header>
  );
}

export default Header;