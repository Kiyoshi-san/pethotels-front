import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/product";
import Banner from "../../components/Banner";
import DealsOfTheDay from "../../components/DealsOfTheDay";

export default function HomePage() {
  return (
    <div className="pt_homepage">
      <Banner></Banner>
      <div className="body-container">
        <div className="body-box">
          <DealsOfTheDay />
        </div>
      </div>
    </div>
  );
}
