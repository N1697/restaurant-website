import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images.js";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Welcome To" />
        <h1 className="app__header-h1">Bien Nho Seafood</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Seafood dishes are made from fresh seafood and are carefully chosen to
          create delicious dishes that satisfy diners. Professional service
          along with experienced Chefs in preparing delicious and excellent
          seafood dishes. Conquer the most demanding customers
        </p>

        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.seafood1} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
