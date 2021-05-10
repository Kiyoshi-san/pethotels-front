import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/banner/banner1.jpg";
import img2 from "../../assets/images/banner/banner2.jpg";
import img3 from "../../assets/images/banner/banner3.jpg";
import img4 from "../../assets/images/banner/banner4.jpg";

export default function Banner() {
  const [animatedClass, setAnimatedClass] = useState("title-animated");
  const changeHandler = (e, a) => {
    setAnimatedClass("");
    setAnimatedClass("title-animated");
  };
  return (
    <Carousel
      autoPlay
      swipeable
      onChange={changeHandler}
      emulateTouch
      infiniteLoop
      stopOnHover
    >
      <div>
        <div className="imageMask"></div>
        <img src={img1} />
        <h1 className={`title ${animatedClass}`}>Legend 1</h1>
      </div>
      <div>
        <div className="imageMask"></div>
        <img src={img2} />
        <h1 className={`title ${animatedClass}`}>Legend 2</h1>
      </div>
      <div>
        <div className="imageMask"></div>
        <img src={img3} />
        <h1 className={`title ${animatedClass}`}>Legend 3</h1>
      </div>
      <div>
        <div className="imageMask"></div>
        <img src={img4} />
        <h1 className={`title ${animatedClass}`}>Legend 4</h1>
      </div>
    </Carousel>
  );
}
