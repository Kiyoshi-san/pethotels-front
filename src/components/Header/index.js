import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { activeLoginModal } from "../../redux/actions/user";

export default function Header() {
  const dispatch = useDispatch();
  const handleLoginModal = () => {
    dispatch(activeLoginModal(true, "Login"));
  };
  const handleHotelModal = () => {
    dispatch(activeLoginModal(true, "Hotel"));
  };

  return (
    <div className="top-header-menu-container">
      <div className="top-header-menu-box">
        <div className="logo">
          <Link to={"/"}>
            <i className="icon icon-logo"></i>
          </Link>
        </div>
        <div className="cta-icons">
          <div className="category-item click-underline-container">
            <div className="title" onClick={handleLoginModal}>
              <span className="hide-for-small-only">Minha conta</span>
              <i className="icon icon-profile show-for-small-only"></i>
            </div>
            <div className="underline"></div>
          </div>
          <div className="menu-hotel-container" onClick={handleHotelModal}>
            <span>Sou um Hotel</span>
          </div>
        </div>
      </div>
    </div>
  );
}
