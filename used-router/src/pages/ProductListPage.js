import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const product = ["one", "two", "three"];

const ProductListPage = () => {
  const list = product.map((product) => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Product list</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
