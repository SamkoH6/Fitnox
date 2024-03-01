import React from "react";
import sectionImage from "../images/pic2.jpeg";

const Section1 = () => {
  return (
    <section>
      <img src={sectionImage} className="section-pic" alt="" />
      <div className="card bg_white big flex">
        <h1>Členstvo S Benefitmi</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio saepe
          quisquam harum? Quia deleniti vel, doloremque quidem ducimus repellat
          dolor.
        </p>
        <div>
          <a href="" className="underline">
            Zobraziť Členské Benefity
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
