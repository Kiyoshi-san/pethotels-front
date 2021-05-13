import Axios from "axios";
import { headers, errorMessage } from "../../../utils/config";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_OFFERS_REQUEST,
  PRODUCT_OFFERS_SUCCESS,
  PRODUCT_OFFERS_FAIL,
} from "./constants";

export const listProducts =
  ({
    pageNumber = "",
    seller = "",
    name = "",
    category = "",
    order = "",
    min = 0,
    max = 0,
    rating = 0,
  }) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/products?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  };

export const listProductOffers = () => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_OFFERS_REQUEST,
  });
  try {
    const { data } = await Axios.get(`api/products/productoffer`);
    dispatch({ type: PRODUCT_OFFERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_OFFERS_FAIL, payload: err.message });
  }
};
