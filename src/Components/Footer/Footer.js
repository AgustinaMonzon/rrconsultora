import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../NavBar/logoRRC.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/rrconsultoria_/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="clinkedin.com/company/r-r-consultoria/?viewAsMember=true"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
