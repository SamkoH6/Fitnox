import React, { useState, useEffect } from "react";
import sectionImage1 from "../images/spa.jpeg";
import sectionImage2 from "../images/stretching.jpeg";
import sectionImage3 from "../images/meditation.jpeg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Section3 = () => {
  const [opacity, setOpacity] = useState({ sp1: 1, sp2: 0, sp3: 0 });
  const [activeElement, setActiveElement] = useState(0);
  const [isHoverEnabled, setIsHoverEnabled] = useState(window.innerWidth > 851);

  useEffect(() => {
    const handleResize = () => {
      setIsHoverEnabled(window.innerWidth > 851);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardHover = (pic, index) => {
    if (isHoverEnabled) {
      setOpacity({ sp1: 0, sp2: 0, sp3: 0, [pic]: 1 });
      setActiveElement(index);
    }
  };

  const plusCards = (n) => {
    setOpacity((prevOpacity) => {
      const newIndex = (activeElement + n + 3) % 3;
      const newOpacity = {
        sp1: 0,
        sp2: 0,
        sp3: 0,
        [`sp${newIndex + 1}`]: 1,
      };
      setActiveElement(newIndex);
      return newOpacity;
    });
  };

  return (
    <section>
      <img
        src={sectionImage1}
        className="section-pic sp1"
        alt=""
        style={{ opacity: opacity.sp1 }}
      />
      <img
        src={sectionImage2}
        className="section-pic sp2"
        alt=""
        style={{ opacity: opacity.sp2 }}
      />
      <img
        src={sectionImage3}
        className="section-pic sp3"
        alt=""
        style={{ opacity: opacity.sp3 }}
      />
      <div className="cards-row">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`card small flex card${index + 1} ${
              activeElement === index ? "active" : ""
            }`}
            onMouseOver={() => handleCardHover(`sp${index + 1}`, index)}
          >
            <h1>{["Sauna", "Regenerácia", "Meditácia"][index]}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus totam fuga pariatur dolorem cum officiis.
            </p>
            <div className="small-underline">
              <a
                href="#"
                className="underline"
                style={{ color: activeElement === index ? "#000" : "#fff" }}
              >
                {`Objavte ${["Saunu", "Regeneráciu", "Meditáciu"][index]}`}
              </a>
            </div>
            <a className="previous_card" onClick={() => plusCards(-1)}>
              <FaAngleLeft />
            </a>
            <a className="next_card" onClick={() => plusCards(1)}>
              <FaAngleRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
