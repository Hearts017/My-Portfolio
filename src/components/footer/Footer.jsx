import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <a href="index.html">
            <img src={logo} className="footer__logo" alt="logo" />
          </a>
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/jommelcarlos.toledo"
            className="footer__social-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/Hearts017/Hearts017"
            className="footer__social-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jommel-toledo/"
            className="footer__social-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
