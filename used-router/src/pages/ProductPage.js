import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product.js";

const ProductPage = ({ match }) => {
  return (
    <>
      <div>Products</div>
      <Product id={match.params.id} />
      <Link to="/product">Return to product list</Link>
    </>
  );
};

export default ProductPage;
