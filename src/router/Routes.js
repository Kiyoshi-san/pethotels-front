import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Modal from "../components/Modal";
import UserLogin from "../components/Login/UserLogin";
import HotelLogin from "../components/Login/HotelLogin";

const Routes = () => {
  const loginModal = useSelector((state) => state.loginModal);
  const { loginModalActive } = loginModal;
  const { component } = loginModal;

  return (
    <>
      <Header />
      <main className="mainContainer">
        <Modal
          className={loginModalActive}
          component={
            component == "Login"
              ? UserLogin
              : component == "Hotel"
              ? HotelLogin
              : () => <></>
          }
        />
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/products" component={ProductList} exact></Route>
          <Route
            path="/product/:category/:name/:id"
            component={ProductDetail}
            exact
          ></Route>
        </Switch>
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Routes;
