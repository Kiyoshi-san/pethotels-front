import React from "react";
import Search from "../Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="top-header-menu-container">
      <Link to={"/"}>
        <i className="icon icon-logo"></i>
      </Link>
      <Search />
      <div className="cta-icons">
        <i className="icon icon-heart-empty"></i>
        <div className="top-header-menu--my-account">
          <span className="hide-for-small-only">Minha conta</span>
          <i className="icon icon-profile show-for-small-only"></i>
        </div>
        <i className="icon icon-cart"></i>
      </div>
    </div>
  );
}
