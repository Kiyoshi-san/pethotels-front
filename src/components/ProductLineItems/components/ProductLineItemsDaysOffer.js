import React from "react";
import ProductTileDescription from "../../ProductTile/components/ProductTileDescription";

export default function ProductLineItemsDaysOffer(props) {
  const { image, name, newPrice, rating } = props;
  return (
    <div className="product-line-items-days-offer">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="product-line-description">
        <ProductTileDescription
          name={name}
          newPrice={newPrice}
          rating={rating}
        ></ProductTileDescription>
      </div>
    </div>
  );
}
