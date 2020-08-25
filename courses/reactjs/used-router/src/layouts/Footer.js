import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          return (
            <p>
              You are on <span>home page</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <p>
              You are on <span>{props.match.params.page}</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          return (
            <p>
              You are on <span>{props.match.params.idProduct}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
