import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header/index";
import HomePage from "../pages/HomePage";
import ProductList from "../pages/ProductList/index";
import Footer from "../components/Footer";

const Routes = () => {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/products" component={ProductList} exact></Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default Routes;
