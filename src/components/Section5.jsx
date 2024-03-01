import React, { useState, useEffect } from "react";
import sectionImage1 from "../images/loc1.jpeg";
import sectionImage2 from "../images/loc2.jpeg";
import sectionImage3 from "../images/loc3.jpeg";
import sectionImage4 from "../images/loc4.jpeg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const LocationCard = ({ image, title, address }) => (
  <div className="location-card fade">
    <img src={image} alt="" />
    <h2>{title}</h2>
    <p>{address}</p>
  </div>
);

const Section5 = () => {
  const [cardIndex, setCardIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    showCards(cardIndex);
  }, [cardIndex]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function plusCards(n) {
    setCardIndex((prevIndex) => prevIndex + n);
  }

  function showCards(n) {
    let cards = document.querySelectorAll(".location-card");
    if (n > cards.length) {
      setCardIndex(1);
    }
    if (n < 1) {
      setCardIndex(cards.length);
    }
    cards.forEach((card, index) => {
      card.style.display = index === cardIndex - 1 ? "flex" : "none";
    });
  }

  const locationsData = [
    {
      image: sectionImage1,
      title: "Bratislava - Petržalka",
      address: "Stromovícka 24",
    },
    {
      image: sectionImage2,
      title: "Bratislava - Ružinov",
      address: "Maslová 16",
    },
    {
      image: sectionImage3,
      title: "Bratislava - Staré Mesto",
      address: "Mesiacová 4",
    },
    {
      image: sectionImage4,
      title: "Bratislava - Nové Mesto",
      address: "Čoklínska 6",
    },
  ];

  return (
    <section className="clubs_section">
      <div className="clubs-near">
        <div className="clubs-card flex">
          <h1>Objavte Fitká Vo Vašom Okolí</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            repudiandae quod modi consectetur, tempora laborum atque ratione
            magni ut iste.
          </p>
          <div>
            <a href="" className="btn border-black big_btn">
              Nájsť Fitko
            </a>
          </div>
        </div>

        <div className="locations">
          {locationsData.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}

          <div className="location_buttons">
            <a className="prev" onClick={() => plusCards(-1)}>
              <FaChevronLeft />
            </a>
            <a className="next" onClick={() => plusCards(1)}>
              <FaChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
