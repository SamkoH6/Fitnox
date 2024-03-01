import React from "react";

const Header = ({ title, description, imageUrl }) => {
  return (
    <header>
      <img src={imageUrl} className="header-pic" alt="" />
      <div className="text-overlay">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#ze" className="btn big_btn">
          Pridajte Sa
        </a>
      </div>
    </header>
  );
};

export default Header;
