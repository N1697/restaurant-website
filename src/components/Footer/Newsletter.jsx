import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter" id="newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Booking" />
      <h1 className="headtext__cormorant">Book A Table</h1>
      <p className="p__opensans">For Tonight's Dinner</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" name="" id="" placeholder="Enter Your Email" />
      <button className="custom__button">Send</button>
    </div>
  </div>
);

export default Newsletter;
