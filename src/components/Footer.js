import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <h3>Designed and developed by</h3>
      <div id="contacts">
        <h2>Edmond Santiago</h2>
        <div id="contact_icons">
          <a href="https://github.com/ed-santiago" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://github.com/ed-santiago" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:edmond.santiago7@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;