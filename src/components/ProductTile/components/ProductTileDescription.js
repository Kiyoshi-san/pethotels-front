import React from "react";
import RatingStars from "./RatingStars";

export default function ProductTileDescription(props) {
  const { name, oldPrice, newPrice, rating } = props;
  return (
    <div className="product-tile-description">
      <h3 className="title">{name}</h3>
      <div className="price">
        {oldPrice && <span className="old-price">R$ {oldPrice}</span>}
        {newPrice && <span className="new-price">R$ {newPrice}</span>}
      </div>
      <RatingStars rating={rating}></RatingStars>
    </div>
  );
}
