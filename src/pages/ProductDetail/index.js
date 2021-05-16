import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { detailProduct } from "../../redux/actions/product";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailImage from "./ProductDetailImage";
import BannerPage from "../../components/Banner/BannerPage";
import ProductDetailInfo from "./ProductDetailInfo";

export default function Banner(props) {
  const productDetailList = useSelector((state) => state.productDetail);
  const { productDetail } = productDetailList;

  const {
    match: {
      params: { id },
    },
  } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailProduct(id));
  }, []);

  return (
    <div className="product-detail-page-container">
      <BannerPage title="shop" />
      <div className="body-row-container bg-gray">
        <div className="body-row">
          <div className="product-info">
            <ProductDetailImage productDetail={productDetail} />
            <ProductDetailInfo productDetail={productDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}
