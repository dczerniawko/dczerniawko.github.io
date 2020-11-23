import React from "react"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Product from "../components/Product"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Product />
    </Layout>
  )
}
