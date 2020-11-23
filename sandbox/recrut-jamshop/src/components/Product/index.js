import React from "react"
import styled from "styled-components"

import DummyImage from "../../assets/products/dumy.svg"

const DummyImg = styled.img`
  width: 500px;
  height: 500px;
`

const H1Styled = styled.h1`
  color: white;
  font-size: 2em;
  font-family: "Roboto";
  font-weight: bold;
`

const SectionStyled = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10em;
  height: 90vh;
`

const TextOrange = styled.p`
  color: #e7ce5f;
  text-transform: uppercase;
  font-family: "Roboto";
`

const Text = styled.p`
  color: white;
  opacity: 0.7;
  font-size: 1.3em;
  max-width: 450px;
  font-family: "Roboto";
`

const Price = styled.p`
  color: white;
  font-size: 1.5em;
  font-weight: 700;
  font-family: "Roboto";
`

const ButtonStyled = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #ab528d;
  color: white;
  font-size: 0.9rem;
  height: 40px;
  padding: 0 40px;
  transition: 0.4s ease;
  text-transform: uppercase;
  :hover {
    background-color: #f963c5;
    cursor: pointer;
  }
`

function Product() {
  return (
    <>
      <SectionStyled>
        <DummyImg src={DummyImage} alt="Vector Dummy" />
        <div>
          <TextOrange>popular</TextOrange>
          <H1Styled>Wooden Dummy</H1Styled>
          <Text>
            Something that you trully need, but haven't know about it yet.
            Multiple winner of Community Awarads.
          </Text>
          <Price>$104.99</Price>
          <ButtonStyled>add to cart</ButtonStyled>
        </div>
      </SectionStyled>
    </>
  )
}

export default Product
