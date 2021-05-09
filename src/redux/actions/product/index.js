import Axios from "axios";
import { headers, errorMessage } from "../../../utils/config";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "./constants";

export const listProducts = ({
  pageNumber = "",
  seller = "",
  name = "",
  category = "",
  order = "",
  min = 0,
  max = 0,
  rating = 0,
}) => async (dispatch) => {
  console.log("aaa");
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  console.log("bbb");
  try {
    console.log("ccc");
    const { data } = await Axios.get(
      `/api/products?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
    );
    console.log("ddd");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
