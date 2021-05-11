import React from "react";
import ProductLineItemsDaysOffer from "../../ProductLineItems/components/ProductLineItemsDaysOffer";

export default function PopularProductsDeals(props) {
  const { daysOffer } = props;
  return (
    <div className="popular-products-deals">
      <div className="title">
        <h1>
          <strong>Produtos</strong> <span>populares</span>
        </h1>
      </div>
      {daysOffer?.length &&
        daysOffer.map((dO) => (
          <ProductLineItemsDaysOffer
            key={dO.name}
            image={dO.image}
            productName={dO.productName}
            newPrice={dO.newPrice}
            ratings={dO.ratings}
          />
        ))}
    </div>
  );
}
