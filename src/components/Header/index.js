import React from "react";
import Search from "../Search";

export default function Header() {
  return (
    <div className="top-header-menu-container">
      <i className="icon icon-logo"></i>
      <Search />
      <div className="cta-icons">
        <i className="icon icon-heart-empty"></i>
        <div className="top-header-menu--my-account">
          <span>Minha conta</span>
        </div>
        <i className="icon icon-cart"></i>
      </div>
    </div>
  );
}
