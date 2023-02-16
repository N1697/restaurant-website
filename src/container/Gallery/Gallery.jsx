import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  images.gallerySeafood01,
  images.gallerySeafood02,
  images.gallerySeafood03,
  images.gallerySeafood04,
  images.gallerySeafood05,
  images.gallerySeafood06,
  images.gallerySeafood07,
  images.gallerySeafood08,
  images.gallerySeafood09,
  images.gallerySeafood10,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef; // = scrollRef.current

    if (direction === "left") {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Facebook" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          At Bien Nho 2, you will enjoy more than 50 kinds of live seafood,
          freshly prepared.
        </p>
        <button className="custom__button" type="button">
          <a
            href="https://www.facebook.com/nhahanghaisanbiennho2/photos"
            target="_blank"
          >
            View More
          </a>
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery" />
                <a
                  href="https://www.facebook.com/nhahanghaisanbiennho2/photos"
                  target="_blank"
                  className="gallery__image-icon"
                >
                  <FiFacebook />
                </a>
              </div>
            );
          })}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />

          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
