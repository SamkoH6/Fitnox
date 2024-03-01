import React from "react";
import sectionImage from "../images/phone.jpeg";

const Section4 = () => {
  return (
    <section>
      <img src={sectionImage} className="section-pic" alt="" />
      <div className="card bg_white big flex app_card">
        <h1>Fitnox+ Aplikácia</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          deleniti esse quas necessitatibus ea dicta suscipit doloribus optio
          quidem minima?
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
        perspiciatis!
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          asperiores eveniet assumenda iure nulla eius iusto provident repellat
          voluptatibus porro.
        </p>
        <div>
          <a href="" className="underline">
            Objavte Fitnox+ Aplikáciu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section4;
