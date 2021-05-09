import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userListReducer } from "../reducers/user";
import { productListReducer } from "../reducers/product";
import { orderListReducer } from "../reducers/order";

const initialState = {};

const reducer = combineReducers({
  userList: userListReducer,
  productList: productListReducer,
  // orderList: orderListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
