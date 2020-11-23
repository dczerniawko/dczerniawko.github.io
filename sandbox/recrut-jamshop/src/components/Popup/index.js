import React from "react"
import Popup from "reactjs-popup"
import styled from "styled-components"

import ShopBasket from "../../assets/products/shopping-basket.svg"

const ImgStyled = styled.img`
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
  cursor: pointer;
`

const DivStyled = styled.div`
  position: relative;
  width: 12px;
  height: 13px;
  left: 70%;
  top: -60%;
  background-color: #ab528d;
  border-radius: 50%;
`

const P0 = styled.p`
  position: absolute;
  left: 30%;
  bottom: -45%;
  font-family: Roboto;
  font-size: 8px;
  color: white;
`

const BtnStyled = styled.button`
  background-color: transparent;
  border: none;
`

const PopupStyled = styled(Popup)`
  &-content {
    positive: absolute;
    top: -30%;
    left: 40%;
    width: 270px;
    height: 250px;
    background: #220538;
    border: 2px solid #f5f5f5;
    box-sizing: border-box;
    border-radius: 4px;
    color: white;
    padding: 10px;
  }
  &-overlay {
    backdrop-filter: blur(20px);
    background: rgba(28, 4, 46, 0.55);
  }
`

const ButtonStyled = styled.button`
  position: absolute;
  bottom: 5%;
  right: 5%;
  border-radius: 4px;
  border: none;
  background-color: #ab528d;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  padding: 5px 20px;
  transition: 0.4s ease;
  :hover {
    background-color: #f963c5;
    cursor: pointer;
  }
`

export default function Banner() {
  return (
    <PopupStyled
      trigger={
        <BtnStyled>
          <ImgStyled src={ShopBasket} alt="Shop basket" />
          <DivStyled>
            <P0>0</P0>
          </DivStyled>
        </BtnStyled>
      }
      modal
    >
      <div>
        <span>&#x25BC;</span>
        <span>Popup content test here!!!</span>
        <ButtonStyled>submit</ButtonStyled>
      </div>
    </PopupStyled>
  )
}
