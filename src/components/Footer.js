import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <h3>Designed and developed by</h3>
      <div id="contacts">
        <h2>Edmond Santiago</h2>
        <div id="contact_icons">
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-solid fa-envelope"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;