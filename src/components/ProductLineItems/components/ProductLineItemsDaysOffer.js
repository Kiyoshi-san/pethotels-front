import React from "react";
import { Link } from "react-router-dom";
import ProductTileDescription from "../../ProductTile/components/ProductTileDescription";

export default function ProductLineItemsDaysOffer(props) {
  const { productId, category, name, image, newPrice, rating } = props;
  return (
    <div className="product-line-items-days-offer">
      <Link to={`/product/${category}/${name}/${productId}`}>
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
      </Link>
      <div className="product-line-description">
        <ProductTileDescription
          productId={productId}
          name={name}
          category={category}
          newPrice={newPrice}
          rating={rating}
        ></ProductTileDescription>
      </div>
    </div>
  );
}
