import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { SideBySideMagnifier } from "react-image-magnifiers";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/banner/banner1.jpg";
import img2 from "../../assets/images/banner/banner2.jpg";
import img3 from "../../assets/images/banner/banner3.jpg";
import img4 from "../../assets/images/banner/banner4.jpg";

export default function Banner() {
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

  const alwaysInPlace = true,
    overlayOpacity = 0.6,
    switchSides = false,
    fillAvailableSpace = false,
    fillAlignTop = false,
    fillGapLeft = 0,
    fillGapRight = 10,
    fillGapTop = 10,
    fillGapBottom = 10;

  return (
    <div className="product-detail-page-container">
      <Carousel
        autoPlay={false}
        swipeable
        emulateTouch
        infiniteLoop
        stopOnHover
      >
        {/* {slidesData.map((slide) => (
          <div className="product-dtail-page-carousel-image-zoom">
            <img
              className="thumbnail-carousel-zoom"
              src={`https://picsum.photos/1200/1300?img=${slide.id}`}
            />
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
        ))} */}
        <div className="product-dtail-page-carousel-image-zoom">
          <img className="thumbnail-carousel-zoom" src={img1} />
          <SideBySideMagnifier
            className="input-position"
            style={{ order: switchSides ? "1" : "0" }}
            imageSrc={img1}
            largeImageSrc={img1}
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
        <div className="product-dtail-page-carousel-image-zoom">
          <img className="thumbnail-carousel-zoom" src={img2} />
          <SideBySideMagnifier
            className="input-position"
            style={{ order: switchSides ? "1" : "0" }}
            imageSrc={img2}
            largeImageSrc={img2}
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
        <div className="product-dtail-page-carousel-image-zoom">
          <img className="thumbnail-carousel-zoom" src={img3} />
          <SideBySideMagnifier
            className="input-position"
            style={{ order: switchSides ? "1" : "0" }}
            imageSrc={img3}
            largeImageSrc={img3}
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
        <div className="product-dtail-page-carousel-image-zoom">
          <img className="thumbnail-carousel-zoom" src={img4} />
          <SideBySideMagnifier
            className="input-position"
            style={{ order: switchSides ? "1" : "0" }}
            imageSrc={img4}
            largeImageSrc={img4}
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
      </Carousel>
    </div>
  );
}
