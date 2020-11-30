import React from "react"
import { graphql } from "gatsby"
import containerStyles from "./container.module.css"

export default function Product({ data }) {
  const product = data.markdownRemark
  return (
    <>
      <section className={containerStyles.section}>
        <img
          className={containerStyles.img}
          src="https://dummyimage.com/500x400"
          alt="Vector Dummy"
        />
        <div>
          <p className={containerStyles.kind}>popular</p>
          <h1 className={containerStyles.title}>{product.frontmatter.name}</h1>
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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
      }
    }
  }
`
