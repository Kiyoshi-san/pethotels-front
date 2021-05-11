import React, { useEffect, useState } from "react";
import MultCategories from "./MultCategories";
import ProductTileHome from "../ProductTileHome";
import PopularProductsDeals from "./components/PopularProductsDeals";

export default function DealsOfTheDay() {
  const [days, setDays] = useState(780);
  const [hours, setHours] = useState(4);
  const [mins, setMins] = useState(26);
  const [secs, setSecs] = useState(42);
  const [oldPrice, setOldPrice] = useState(190.0);
  const [newPrice, setNewPrice] = useState(180.0);
  const [ratings, setRatings] = useState(180.0);
  const [daysOffer, setDaysOffer] = useState([
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "slami in ball tip pig eiusmod",
      newPrice: "170,00",
      ratings: "4",
    },
    {
      image: "/product_images/brinquedo-roda-cachorro.png",
      productName: "magna sint sirlon",
      newPrice: "155,00",
      ratings: "2",
    },
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "enim eu kevin tail enim ve",
      newPrice: "135,00",
      ratings: "5",
    },
  ]);
  //   const img = require("../../assets/images/products/brinquedo-osso-cachorro.png");
  //   const [productImage, setProductImage] = useState(img.default);
  //   When it's in a public folder, it can be declared directly by path like this below
  const [productImage, setProductImage] = useState(
    "/product_images/brinquedo-osso-cachorro2.png"
  );
  const [productName, setProductName] = useState("AUTE BEEF");

  useEffect(() => {
    //   TODO BRING EXPIRATION TIME
  });

  return (
    <div className="deals-of-the-day-container">
      <div className="left-panel">
        <div className="title">
          <h1>
            <strong>Ofertas</strong> <span>do dia</span>
          </h1>
        </div>
        <div className="body">
          <div>
            <span>
              Mauris ut tincidunt nisi, id auctor libero. Etiam aliquet felis et
              consectetur faucibus. Praesent aliquam, lec tempus consequat,
              felis quam venenatis ligula
            </span>
          </div>
          <MultCategories></MultCategories>
        </div>
      </div>
      <div className="middle-panel">
        <ProductTileHome
          days={days}
          hours={hours}
          mins={mins}
          secs={secs}
          productImage={productImage}
          productName={productName}
          oldPrice={oldPrice}
          newPrice={newPrice}
          ratings={ratings}
        ></ProductTileHome>
      </div>
      <div className="right-panel">
        <PopularProductsDeals daysOffer={daysOffer}></PopularProductsDeals>
      </div>
    </div>
  );
}
