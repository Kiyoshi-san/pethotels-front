import React, { useState, useEffect } from "react";

// https://www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/
// https://react-slick.neostack.com/docs/example/as-nav-for
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// https://github.com/adamrisberg/react-image-magnifiers.git
import { SideBySideMagnifier } from "react-image-magnifiers";

export default function ProductDetail(props) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
    arrows: true,
  };

  const slidesData = [
    {
      id: 1,
      title: "repellendus id ullam",
      label: "Dolorem officiis temporibus.",
    },
    {
      id: 2,
      title: "excepturi consequatur est",
      label: "Officia non provident dolor esse et neque.",
    },
    {
      id: 3,
      title: "eius doloribus blanditiis",
      label: "Ut recusandae vel vitae molestiae id soluta.",
    },
    {
      id: 4,
      title: "nihil voluptates delectus",
      label: "Qui vel consequatur recusandae illo repellendus.",
    },
    {
      id: 5,
      title: "nemo dolorem necessitatibus",
      label: "Placeat odit velit itaque voluptatem.",
    },
    {
      id: 6,
      title: "dolorem quibusdam quasi",
      label: "Adipisci officiis repudiandae.",
    },
  ];

  // ######################

  const alwaysInPlace = true,
    overlayOpacity = 0.6,
    switchSides = false,
    fillAvailableSpace = false,
    fillAlignTop = false,
    fillGapLeft = 0,
    fillGapRight = 10,
    fillGapTop = 10,
    fillGapBottom = 10;

  const zoomImages = () => {
    slidesData.map((slide) => <div style={{ maxWidth: "1000px" }}>AAA</div>);
  };

  return (
    <div className="App">
      <div className="slider-wrapper">
        {zoomImages()}
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData.map((slide) => (
            <div className="slick-slide" key={slide.id}>
              <h2 className="slick-slide-title">{slide.title}</h2>
              <div
                style={{ maxWidth: "600px" }}
                className="slick-slide"
                key={slide.id}
              >
                <SideBySideMagnifier
                  className="input-position"
                  style={{ order: switchSides ? "1" : "0" }}
                  imageSrc={`https://picsum.photos/1200/1300?img=${slide.id}`}
                  largeImageSrc={`https://picsum.photos/1200/1300?img=${slide.id}`}
                  alwaysInPlace={alwaysInPlace}
                  overlayOpacity={overlayOpacity}
                  switchSides={switchSides}
                  zoomPosition="left"
                  inPlaceMinBreakpoint={641}
                  fillAvailableSpace={fillAvailableSpace}
                  fillAlignTop={fillAlignTop}
                  fillGapTop={fillGapTop}
                  fillGapRight={fillGapRight}
                  fillGapBottom={fillGapBottom}
                  fillGapLeft={fillGapLeft}
                  zoomContainerBorder="1px solid #ccc"
                  zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
                />
              </div>
              <label className="slick-slide-label">{slide.label}</label>
            </div>
          ))}
        </Slider>
        <div className="thumbnail-slider-wrap" style={{ maxWidth: "300px" }}>
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {slidesData.map((slide) => (
              <div className="slick-slide" key={slide.id}>
                <img
                  style={{ maxHeight: "100px" }}
                  className="slick-slide-image"
                  src={`https://picsum.photos/1200/1300?img=${slide.id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
