import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Text from "../components/Text"
import Carousel from "../components/Carousel"

import { graphql } from "gatsby"

import HeroBackground from "../assets/elements/hero_background.svg"

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1c042e;
  background-image: url(${HeroBackground});
  background-repeat: no-repeat;
  background-position: top 0 right 0;
`

export default function IndexPage({ data }) {
  return (
    <>
      <StyledWrapper>
        <Layout>
          <SEO title="Home" />
          <Hero />
          <Text />
          <Carousel data={data} />
        </Layout>
      </StyledWrapper>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/products/g" } }
      skip: 1
    ) {
      edges {
        node {
          frontmatter {
            image
            name
            price
            title
            description
            excerpt
          }
        }
      }
    }
  }
`
