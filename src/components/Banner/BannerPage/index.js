import React from "react";
import productDetailPage from "../../../assets/images/banner/banner_product_detail_page.jpg";

export default function BannerPage(props) {
  const { title } = props;
  return (
    <div className="banner-page-container">
      <div className="banner-page-title">
        <h3>{title}</h3>
      </div>
      <div className="banner-page-img">
        <img src={productDetailPage} alt="" />
      </div>
    </div>
  );
}
