import React from "react";
import ProductTileDescription from "./components/ProductTileDescription";
import BottomButtons from "./components/BottomButtons";

export default function ProductTile(props) {
  const { product } = props;

  return (
    <div className="product-tile">
      <div className="image-product-container">
        <img src={product.image} alt={product.productName} />
      </div>
      <div className="description">
        <ProductTileDescription
          productName={product.productName}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
          ratings={product.ratings}
        ></ProductTileDescription>
      </div>
      <div className="product-tile-bottom-buttons">
        <BottomButtons></BottomButtons>
      </div>
    </div>
  );
}
