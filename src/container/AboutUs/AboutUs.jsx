import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Bien Nho 2 Seafood Restaurant was born from the enthusiasm of the
          investor who always cherishes to bring a reliable address to provide
          quality - safe dishes with the criterion "Quality" is what Bien Me 2
          will be brought to you upon arrival. From a comfortable space,
          luxurious and beautiful view and enjoy the Fresh - Clean - Quality
          products. Along with that, you will be welcomed and served attentively
          by Bien Me 2 staff.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_services">
        <h1 className="headtext__cormorant">Services</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          At Bien Nho 2, you will enjoy more than 50 kinds of live seafood,
          freshly prepared. In addition, Bien Nho 2 completely meets your menu
          with many needs from daily dining to parties with family and friends
          or more.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
