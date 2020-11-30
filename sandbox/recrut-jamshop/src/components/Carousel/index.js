import React from "react"
import ElasticCarousel from "react-elastic-carousel"
import { Link, graphql } from "gatsby"

import containerStyles from "./container.module.css"

function addToCart(e) {
  console.log(e.target)
}

export default function Carousel(data) {
  console.log(data)
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3 },
    { width: 1248, itemsToShow: 4 },
  ]
  return (
    <div className={containerStyles.main}>
      <ElasticCarousel breakPoints={breakPoints}>
        {data.data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <div className={containerStyles.box}>
              <img
                className={containerStyles.img}
                src={node.frontmatter.image}
                alt="capsheaf "
              />
              <h1 className={containerStyles.title}>{node.frontmatter.name}</h1>
              <p className={containerStyles.subtitle}>
                {node.frontmatter.excerpt}
              </p>
              <button onClick={addToCart} className={containerStyles.btn}>
                +
              </button>
            </div>
          </div>
        ))}
      </ElasticCarousel>
    </div>
  )
}
