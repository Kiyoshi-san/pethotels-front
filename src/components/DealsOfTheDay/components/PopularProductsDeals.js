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
      <div className="productlist">
        {daysOffer?.length &&
          daysOffer.map((dO) => (
            <div key={dO.name}>
              <ProductLineItemsDaysOffer
                image={dO.image}
                name={dO.name}
                newPrice={dO.newPrice}
                rating={dO.rating}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
