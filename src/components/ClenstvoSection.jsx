import React from "react";

const ClenstvoSection = ({ title, description, imageUrl, direction }) => {
  return (
    <section className="clenstvo-section">
      <img src={imageUrl} className="clenstvo-section-pic" alt="" />
      <div className="card clenstvo_card bg_black">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="btn big_btn btn_black">
          <a href={direction}>Zistite Viac</a>
        </div>
      </div>
    </section>
  );
};

export default ClenstvoSection;
