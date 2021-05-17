import React, { useState } from "react";

export default function ProductInfo(props) {
  const { productDetail } = props;
  const [activeTab, setActiveTab] = useState(1);

  const activeTabHandler = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="product-info-container">
      <div className="product-info-tabs">
        <div
          className={`description-container ${activeTab == 1 ? "active" : ""}`}
          onClick={() => activeTabHandler(1)}
        >
          <h2>Descrição</h2>
        </div>
        <div
          className={`description-container ${activeTab == 2 ? "active" : ""}`}
          onClick={() => activeTabHandler(2)}
        >
          <h2>Tags</h2>
        </div>
        <div
          className={`description-container ${activeTab == 3 ? "active" : ""}`}
          onClick={() => activeTabHandler(3)}
        >
          <h2>Reviews</h2>
        </div>
        <div
          className={`description-container ${activeTab == 4 ? "active" : ""}`}
          onClick={() => activeTabHandler(4)}
        >
          <h2>Vendedor</h2>
        </div>
        <div
          className={`description-container ${activeTab == 5 ? "active" : ""}`}
          onClick={() => activeTabHandler(5)}
        >
          <h2>Mais produtos</h2>
        </div>
      </div>
      <div className="product-info-body">
        {activeTab == 1 ? (
          <div id="product-info" className="description-container">
            {productDetail?.description}
          </div>
        ) : activeTab == 2 ? (
          <div>asdf</div>
        ) : activeTab == 3 ? (
          <div>asdf2</div>
        ) : activeTab == 4 ? (
          <div>asdf3</div>
        ) : activeTab == 5 ? (
          <div>asdf4</div>
        ) : null}
      </div>
    </div>
  );
}
