import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/product";

export default function ProductList() {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts({}));
  }, []);

  return (
    <div>
      {products?.length && products.map((product) => <div>{product.name}</div>)}
    </div>
  );
}
