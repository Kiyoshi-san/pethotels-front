import React from "react";

export default function MenuCategory(props) {
  const { categories } = props;

  return (
    <div className="menu-category-container">
      <i className="icon icon-menu show-for-small-only"></i>
      {categories?.map((cat) => (
        <div key="cat.name">{cat.name}</div>
      ))}
    </div>
  );
}
