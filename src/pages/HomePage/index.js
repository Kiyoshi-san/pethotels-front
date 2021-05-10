import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/product";
import Banner from "../../components/Banner";

export default function HomePage() {
  return (
    <div className="pt_homepage">
      <Banner></Banner>
    </div>
  );
}
