import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import personalImage from "../images/personal.jpeg";
import boxImage from "../images/box.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const BarsClick = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    // Add or remove the 'no-scroll' class on the body based on isMobileNavOpen
    htmlElement.classList.toggle("no-scroll", isMobileNavOpen);

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      htmlElement.classList.remove("no-scroll");
    };
  }, [isMobileNavOpen]);

  return (
    <div>
      <div className="navbar">
        <div className="container flex">
          <Link to="/">
            <h1 className="logo">FITNOX</h1>
          </Link>
          <div className="nav-laptop">
            <nav>
              <ul>
                <li>
                  <Link className="underline" to="clenstvo">
                    Člentsvo
                  </Link>
                </li>
                <li>
                  <a className="underline" href="#Nase-fitka">
                    Naše fitká
                  </a>
                </li>
                <li>
                  <div className="dropdown-btn">
                    <a className="underline" href="#Tréning">
                      Tréning <FaAngleDown />
                    </a>
                  </div>
                  <div className="dropdown">
                    <div className="flex">
                      <div className="wrapd">
                        <img src={personalImage} alt="" />
                        <p>
                          Osobný tréning <FaArrowRightLong />
                        </p>
                      </div>
                      <div className="wrapd">
                        <img src={boxImage} alt="" />
                        <p>
                          Box <FaArrowRightLong />
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="underline" href="#Skupinovky">
                    Skupinovky
                  </a>
                </li>
                <div className="separator"></div>
                <li>
                  <a className="underline" href="#Sauna">
                    Sauna
                  </a>
                </li>
                <li>
                  <a className="underline" href="#Obchod">
                    Obchod
                  </a>
                </li>
                <div className="separator"></div>
                <li>
                  <a className="underline" href="#Kontakt">
                    Kontakt
                  </a>
                </li>
              </ul>
              <div>
                <a href="#Registracia" className="btn">
                  Priďajte Sa
                </a>
              </div>
            </nav>
          </div>
          <div className="bars" id="bars" onClick={BarsClick}>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>

      <div
        className="nav-mobile"
        style={{ right: isMobileNavOpen ? "0px" : "-100%" }}
      >
        <nav>
          <ul>
            <li>
              <div>
                <a href="#Registracia" className="btn">
                  Priďajte Sa
                </a>
              </div>
            </li>
            <li>
              <a className="underline" href="#Clenstvo">
                Členstvo
              </a>
            </li>
            <li>
              <a className="underline" href="#Nase-fitka">
                Naše fitká
              </a>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a className="underline" href="#Osobny-trening">
                Osobný tréning
              </a>
            </li>
            <li>
              <a className="underline" href="#Box">
                Box
              </a>
            </li>
            <li>
              <a className="underline" href="#Skupinovky">
                Skupinovky
              </a>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a className="underline" href="#Sauna">
                Sauna
              </a>
            </li>
            <li>
              <a className="underline" href="#Obchod">
                Obchod
              </a>
            </li>
            <li>
              <a className="underline" href="#Kontakt">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="overlay"
        style={{ display: isMobileNavOpen ? "block" : "none" }}
        className={isMobileNavOpen ? "overlay-dark" : ""}
      ></div>
    </div>
  );
};

export default Navbar;
