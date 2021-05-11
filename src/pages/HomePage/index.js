import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/product";
import Banner from "../../components/Banner";
import DealsOfTheDay from "../../components/DealsOfTheDay";
import ProductCarousel from "../../components/ProductCarousel";
import CategoryBanners from "../../components/CategoryBanners";

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
      <div className="body-row-container bg-gray">
        <div className="body-row">
          <DealsOfTheDay />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <CategoryBanners />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <ProductCarousel products={products} title="Produtos Relcionados" />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <ProductCarousel products={products} title="Produtos Relcionados" />
        </div>
      </div>
    </div>
  );
}
