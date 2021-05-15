import React, { useEffect } from "react";
import Search from "../Search";
import { Link } from "react-router-dom";
import MenuCategory from "../Menu/MenuCategory";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../redux/actions/category";

export default function Header() {
  const categoryList = useSelector((state) => state.categoriesList);
  const { categories } = categoryList;

  const dispatch = useDispatch(listCategories());
  useEffect(() => {
    dispatch(listCategories());
    console.log("aaa");
    console.log(categories);
    console.log("aaa");
  }, []);

  return (
    <div className="top-header-menu-container">
      <MenuCategory categories={categories} />
      <div className="logo">
        <Link to={"/"}>
          <i className="icon icon-logo"></i>
        </Link>
      </div>
      <Search />
      <div className="cta-icons">
        <i className="icon icon-heart-empty hide-for-small-only"></i>
        <div className="top-header-menu--my-account">
          <span className="hide-for-small-only">Minha conta</span>
          <i className="icon icon-profile show-for-small-only"></i>
        </div>
        <i className="icon icon-cart"></i>
      </div>
    </div>
  );
}
