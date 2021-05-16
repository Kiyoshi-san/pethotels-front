import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../../redux/actions/category";

export default function MenuCategory() {
  const categoryList = useSelector((state) => state.categoriesList);
  const { categories } = categoryList;
  const [categoryPosFixed, setCategoryPosFixed] = useState("");

  const categoriesRoot = categories?.filter((obj) => {
    return obj.parentCategoryId === "root";
  });

  const dispatch = useDispatch(listCategories());
  useEffect(() => {
    dispatch(listCategories());
    console.log("aaa");
    console.log(categoriesRoot);
    console.log("aaa");
  }, []);

  /* const headerHeight = document.querySelectorAll(
    ".top-header-menu-box"
  ).offsetTop; */
  const headerHeight = 90;

  useEffect(() => {
    window.addEventListener("scroll", (a) => {
      if (window.scrollY >= headerHeight) {
        setCategoryPosFixed("category-fixed");
      } else {
        setCategoryPosFixed("");
      }
    });
  });

  return (
    <div className={`menu-category-container ${categoryPosFixed}`}>
      <div className="menu-category-box">
        <i className="icon icon-menu show-for-small-only"></i>
        {categoriesRoot?.map((cat) => (
          <div className="category-item" key={`${cat.name}${cat.categoryId}`}>
            <Link to={`${cat.categoryId}`}>
              <span>{cat.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
