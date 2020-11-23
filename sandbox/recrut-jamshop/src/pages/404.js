import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts"
import SEO from "../components/SEO"

import FourZeroFour from "../assets/images/404.jpg"

const H1Styled = styled.h1`
  font-family: Georgia;
  font-weight: bold;
  font-size: 4rem;
  color: #e5e5e5;
  letter-spacing: 1px;
  text-align: center;
`

const PStyled = styled.p`
  font-family: Georgia;
  font-size: 1.5rem;
  color: #e5e5e5;
  opacity: 0.8;
  text-align: center;
`

const ImgStyled = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 600px;
  width: 600px;
  border-radius: 10px;
`

const LinkStyled = styled(Link)`
  font-family: Roboto;
  font-size: 2rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
`
const ButtonStyled = styled.button`
  position: absolute;
  left: 40%;
  height: 60px;
  border-radius: 4px;
  border: none;
  background-color: #ab528d;
  color: white;
  font-size: 0.8rem;
  padding: 0 100px;
  margin: 10px auto;
  transition: 0.4s ease;
  :hover {
    background-color: #f963c5;
    cursor: pointer;
  }
`

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <H1Styled>Ups... 404</H1Styled>
      <PStyled>This is not the page you are looking for :(</PStyled>
      <ImgStyled src={FourZeroFour} alt="Cat in belt" />
      <ButtonStyled>
        <LinkStyled to="/">Home</LinkStyled>
      </ButtonStyled>
    </>
  )
}
