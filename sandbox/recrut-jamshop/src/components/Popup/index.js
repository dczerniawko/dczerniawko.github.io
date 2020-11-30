import React from "react"
import Popup from "reactjs-popup"
import styled from "styled-components"
import containerStyles from "./container.module.css"

import ShopBasket from "../../assets/images/shopping-basket.svg"

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

export default function Banner() {
  return (
    <PopupStyled
      trigger={
        <button className={containerStyles.btn}>
          <img
            className={containerStyles.cart}
            src={ShopBasket}
            alt="Shop cart"
          />
          <div className={containerStyles.div}>
            <p className={containerStyles.inside}>0</p>
          </div>
        </button>
      }
      modal
    >
      <div>
        <span>&#x25BC;</span>
        <span>Popup content test here!!!</span>
        <button className={containerStyles.submit}>submit</button>
      </div>
    </PopupStyled>
  )
}
