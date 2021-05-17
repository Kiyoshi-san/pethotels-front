import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/product";
import Banner from "../../components/Banner";
import DealsOfTheDay from "../../components/DealsOfTheDay";
import ProductCarousel from "../../components/ProductCarousel";
import CategoryBanners from "../../components/CategoryBanners";
import ServiceBanner from "../../components/ServiceBanner";
import { listProductOffers } from "../../redux/actions/product";

export default function HomePage() {
  const [days, setDays] = useState(780);
  const [hours, setHours] = useState(4);
  const [mins, setMins] = useState(26);
  const [secs, setSecs] = useState(42);

  const productOffers = useSelector((state) => state.productOffers);
  const { loading, data, error } = productOffers;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductOffers());
  }, [dispatch]);

  return (
    <div className="pt_homepage">
      <Banner></Banner>
      <div className="body-row-container bg-gray">
        <div className="body-row">
          <DealsOfTheDay
            products={data}
            days={days}
            hours={hours}
            mins={mins}
            secs={secs}
          />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <CategoryBanners />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <ProductCarousel title="Produtos Relacionados" />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <ServiceBanner />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <ProductCarousel title="Produtos Relacionados" />
        </div>
      </div>
    </div>
  );
}
