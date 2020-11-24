import React from "react"
import containerStyles from "./container.module.css"

import DummyImage from "../../assets/products/dumy.svg"

function Product() {
  return (
    <>
      <section className={containerStyles.section}>
        <img
          className={containerStyles.img}
          src={DummyImage}
          alt="Vector Dummy"
        />
        <div>
          <p className={containerStyles.kind}>popular</p>
          <h1 className={containerStyles.title}>Wooden Dummy</h1>
          <p className={containerStyles.text}>
            Something that you trully need, but haven't know about it yet.
            Multiple winner of Community Awarads.
          </p>
          <p className={containerStyles.price}>$104.99</p>
          <button className={containerStyles.btn}>add to cart</button>
        </div>
      </section>
    </>
  )
}

export default Product
