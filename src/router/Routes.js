import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductList from "../pages/ProductList/index";

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/products" component={ProductList} exact></Route>
      </Switch>
    </div>
  );
};

export default Routes;
