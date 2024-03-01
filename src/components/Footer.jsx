import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex">
        <div>
          <h1>FITNOX</h1>
          <p>Copyright &copy; 2024</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">O Nás</a>
            </li>
            <li>
              <a href="">Kariéra</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="">Ochrana Osobných Údajov</a>
            </li>
            <li>
              <a href="">Všeobecné Obchodné Podmienky</a>
            </li>
            <li>
              <a href="">Kontakt</a>
            </li>
          </ul>
        </nav>
        <div className="social">
          <a href="#">
            <FaFacebook className="social-icon" />
          </a>
          <a href="#">
            <FaInstagram className="social-icon" />
          </a>
          <a href="#">
            <FaTwitter className="social-icon" />
          </a>
          <a href="#">
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
