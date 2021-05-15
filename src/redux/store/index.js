import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userListReducer } from "../reducers/user";
import { productListReducer, productOffersReducer } from "../reducers/product";
import { orderListReducer } from "../reducers/order";
import { categoriesListReducer } from "../reducers/category";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

const reducer = combineReducers({
  userList: userListReducer,
  productList: productListReducer,
  productOffers: productOffersReducer,
  categoriesList: categoriesListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
