import React from "react";
import RatingStars from "./RatingStars";

export default function ProductTileDescription(props) {
  const { productName, oldPrice, newPrice, ratings } = props;
  console.log(props);
  return (
    <div className="product-tile-description">
      <h3 className="title">{productName}</h3>
      <div className="price">
        {oldPrice && <span className="old-price">R$ {oldPrice}</span>}
        {newPrice && <span className="new-price">R$ {newPrice}</span>}
      </div>
      <RatingStars rating={ratings}></RatingStars>
    </div>
  );
}
