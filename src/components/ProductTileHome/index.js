import React from "react";
import ProductTileDescription from "../ProductTile/components/ProductTileDescription";
import Carousel from "react-multi-carousel";
import ButtonHoverEffect from "../Button/ButtonHoverEffect";

export default function ProductTileHome(props) {
  const {
    days,
    hours,
    mins,
    secs,
    productImage,
    productName,
    oldPrice,
    newPrice,
    ratings,
  } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <ButtonHoverEffect onClick={() => previous()}>
          <i className="elEffect icon icon-left-arrow"></i>
        </ButtonHoverEffect>
        <ButtonHoverEffect onClick={() => next()}>
          <i className="elEffect icon icon-right-arrow"></i>
        </ButtonHoverEffect>
      </div>
    );
  };

  return (
    <Carousel
      containerClass="product-tile-home-container"
      itemClass="carousel-item-height"
      swipeable
      draggable
      showDots={false}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite
      autoPlay
      autoPlaySpeed={1000}
      keyBoardControl
      customTransition="all 1.5"
      transitionDuration={3500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      centerMode={false}
      partialVisible={false}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
    >
      <div className="image-container">
        <div className="expiration-time-container">
          <div className="days">
            <h1>{days}</h1>
            <span>dias</span>
          </div>
          <div className="hours">
            <h1>{hours}</h1>
            <span>horas</span>
          </div>
          <div className="minutes">
            <h1>{mins}</h1>
            <span>mins</span>
          </div>
          <div className="secs">
            <h1>{secs}</h1>
            <span>segs</span>
          </div>
        </div>
        <div className="image-box">
          <img src={productImage} alt="brinquedo-de-cachorro" />
        </div>
        <ProductTileDescription
          productName={productName}
          oldPrice={oldPrice}
          newPrice={newPrice}
          ratings={ratings}
        ></ProductTileDescription>
      </div>
      <div className="image-container">
        <div className="expiration-time-container">
          <div className="days">
            <h1>{days + 12}</h1>
            <span>dias</span>
          </div>
          <div className="hours">
            <h1>{hours + 12}</h1>
            <span>horas</span>
          </div>
          <div className="minutes">
            <h1>{mins + 12}</h1>
            <span>mins</span>
          </div>
          <div className="secs">
            <h1>{secs + 12}</h1>
            <span>segs</span>
          </div>
        </div>
        <div className="image-box">
          <img
            src={"/product_images/brinquedo-roda-cachorro.png"}
            alt="brinquedo-de-cachorro"
          />
        </div>
        <ProductTileDescription
          productName="Roda cachorro"
          oldPrice="R$ 25,00"
          newPrice="R$ 20,00"
          ratings="4"
        ></ProductTileDescription>
      </div>
    </Carousel>
  );
}
