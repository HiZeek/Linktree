import React from "react";
import "./Footer.css";

import Logo from "../assets/logo.png";
import I4G from "../assets/I4G.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={Logo} alt="HNG" className="hng-img" />
        <p className="footer-text">HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="Ingressive" className="i4g-img" />
      </div>
    </footer>
  );
};

export default Footer;
