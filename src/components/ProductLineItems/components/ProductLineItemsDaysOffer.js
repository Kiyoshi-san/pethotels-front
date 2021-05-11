import React from "react";
import ProductTileDescription from "../../ProductTile/components/ProductTileDescription";

export default function ProductLineItemsDaysOffer(props) {
  const { image, productName, newPrice, ratings } = props;
  return (
    <div className="product-line-items-days-offer">
      <div className="image-container">
        <img src={image} alt={productName} />
      </div>
      <ProductTileDescription
        productName={productName}
        newPrice={newPrice}
        ratings={ratings}
      ></ProductTileDescription>
    </div>
  );
}
