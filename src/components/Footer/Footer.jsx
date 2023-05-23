import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/Logo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/" target="_blank">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="logo-f">
          <Link to="home" smooth={true}>
            <img src={Logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
};

export default Footer;
