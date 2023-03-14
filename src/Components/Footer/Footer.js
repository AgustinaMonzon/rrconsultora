import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Text } from "@chakra-ui/react";
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
      {/* <Box className="copy-container" h="22px" textAlign="center" fontSize={["0px","13px"]} marginTop={["0%","2%"]} >
        <Text color="black">© All Rights Reserved 2023</Text>
      </Box> */}
      <div className="footer-social">
        <a href="https://www.facebook.com/rrconsultoriaa?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
          <FontAwesomeIcon  color={"blue"}  icon={faFacebook} />
        </a>
        
        <a
          href="https://www.instagram.com/rrconsultoria_/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon 
              color={"rgb(245, 105, 191)"}  icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/company/r-r-consultoria/?viewAsMember=true"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon 
              color={"rgb(22, 61, 236)"} icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
