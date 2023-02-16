import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">
          Address: 583/1 Nguyen Binh Street, Nha Be District, Vietnam
        </p>
        <p
          className="p__cormorant"
          style={{ color: "var(--color-skyblue)", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Sun: 10:00 AM - 10:00 PM</p>
      </div>

      <button className="custom__button" style={{ marginTop: "2rem" }}>
        <a
          href="https://www.google.com/maps/place/583+Nguy%E1%BB%85n+B%C3%ACnh,+Nh%C6%A1n+%C4%90%E1%BB%A9c,+Nh%C3%A0+B%C3%A8,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.67677,106.705262,16z/data=!4m5!3m4!1s0x3175306c7804ca61:0xaaa645a125fbddd1!8m2!3d10.6767702!4d106.7052622?hl=vi"
          target="_blank"
        >
          Visit Us
        </a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.746552974714!2d106.7030735143192!3d10.676770192389194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175306c7804ca61%3A0xaaa645a125fbddd1!2zNTgzIE5ndXnhu4VuIELDrG5oLCBOaMahbiDEkOG7qWMsIE5ow6AgQsOoLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1676524690522!5m2!1svi!2s"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

export default FindUs;
