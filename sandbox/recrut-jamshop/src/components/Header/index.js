import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Banner from "../Popup"

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 4em;
`

const LinkStyled = styled(Link)`
  font-size: 1.5em;
  color: white;
  text-decoration: none;
`

const AStyled = styled.a`
  position: absolute;
  left: 60px;
  top: 20px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 1.5rem;
  color: #e4e3e3;
`

const BasketArrow = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  &:active {
    transform: scaleY(-1);
  }
`

const Arrow = styled.p`
  color: white;
  margin: 10px;
`

const DivStyled = styled.div`
  display: flex;
`

export default function Header() {
  return (
    <HeaderStyled>
      <LinkStyled to="/">
        <AStyled>JAM SHOP</AStyled>
      </LinkStyled>
      <DivStyled>
        <Banner />
        <BasketArrow>
          <Arrow>&#x25BC;</Arrow>
        </BasketArrow>
      </DivStyled>
    </HeaderStyled>
  )
}
