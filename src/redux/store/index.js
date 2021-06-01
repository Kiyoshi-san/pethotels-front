import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userListReducer, loginModalReducer } from "../reducers/user";
import {
  productDetailReducer,
  productListReducer,
  productOffersReducer,
} from "../reducers/product";
import { categoriesListReducer } from "../reducers/category";
import { addProductToCartReducer } from "../reducers/cart";

const initialState = {
  loading: false,
  data: [],
  error: false,
  loginModalActive: "",
};

const reducer = combineReducers({
  userList: userListReducer,
  productList: productListReducer,
  productOffers: productOffersReducer,
  categoriesList: categoriesListReducer,
  productDetail: productDetailReducer,
  addProductToCart: addProductToCartReducer,
  loginModal: loginModalReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
