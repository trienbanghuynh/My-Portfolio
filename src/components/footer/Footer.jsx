import React from "react";
import "./footer.css";

import { SlSocialReddit } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className="footer_logo">
        {" "}
        TRIEN BANG HUYNH'S PORTFOLIO{" "}
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experiences</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100010729804130"
          target="_blank" rel="noreferrer">
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/bang.ht.47/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://www.reddit.com/user/Benben_think " target="_blank" rel="noreferrer">
          <SlSocialReddit />
        </a>
      </div>
      <div className="footer_copyright">
        <small>Copyright &copy; {footerYear} All rights reserved by Trien Bang</small>
      </div>
    </footer>
  );
};

export default Footer;
