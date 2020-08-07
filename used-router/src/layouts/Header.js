import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import forbidden from "../img/forbidden.jpg";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="forest" />} />
        <Route path="/product" render={() => <img src={img2} alt="forest" />} />
        <Route path="/contact" render={() => <img src={img3} alt="forest" />} />
        <Route path="/admin" render={() => <img src={img4} alt="forest" />} />
        <Route render={() => <img src={forbidden} alt="forest" />} />
      </Switch>
    </>
  );
};

export default Header;
