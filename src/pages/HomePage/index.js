import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/product";
import Banner from "../../components/Banner";
import DealsOfTheDay from "../../components/DealsOfTheDay";
import ProductCarousel from "../../components/ProductCarousel";

export default function HomePage() {
  const [products, setProducts] = useState([
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "slami in ball tip pig eiusmod",
      oldPrice: "140,00",
      newPrice: "170,00",
      ratings: "4",
    },
    {
      image: "/product_images/brinquedo-roda-cachorro.png",
      productName: "magna sint sirlon",
      oldPrice: "135,00",
      newPrice: "155,00",
      ratings: "2",
    },
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "enim eu kevin tail enim ve",
      oldPrice: "115,00",
      newPrice: "135,00",
      ratings: "5",
    },
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "slami in ball tip pig eiusmod",
      oldPrice: "140,00",
      newPrice: "170,00",
      ratings: "4",
    },
    {
      image: "/product_images/brinquedo-roda-cachorro.png",
      productName: "magna sint sirlon",
      oldPrice: "135,00",
      newPrice: "155,00",
      ratings: "2",
    },
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "enim eu kevin tail enim ve",
      oldPrice: "115,00",
      newPrice: "135,00",
      ratings: "5",
    },
  ]);

  return (
    <div className="pt_homepage">
      <Banner></Banner>
      <div className="deals-of-the-day-gray">
        <div className="body-container">
          <div className="body-box">
            <DealsOfTheDay />
          </div>
        </div>
      </div>
      <div className="deals-of-the-day-white">
        <div className="body-container">
          <div className="body-box">
            <ProductCarousel products={products} title="Produtos Relcionados" />
            <ProductCarousel products={products} title="Mais Vendidos" />
          </div>
        </div>
      </div>
    </div>
  );
}
