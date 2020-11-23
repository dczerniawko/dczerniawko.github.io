import React from "react"
import styled from "styled-components"

import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

const SectionStyled = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const H1Styled = styled.h1`
  position: absolute;
  left: 820px;
  top: 270px;
  font-family: Georgia;
  font-weight: bold;
  font-size: 3rem;
  color: #e5e5e5;
  letter-spacing: 1px;
`

const ButtonStyled = styled.button`
  position: absolute;
  height: 40px;
  left: 750px;
  top: 460px;
  border-radius: 4px;
  border: none;
  background-color: #ab528d;
  color: white;
  font-size: 0.8rem;
  padding: 0 30px;
  transition: 0.4s ease;
  :hover {
    background-color: #f963c5;
    cursor: pointer;
  }
`

const ImgStyled = styled.img`
  position: absolute;
  right: 60%;
  top: 13%;
`

const DecorStyled = styled.img`
  position: absolute;
  left: 100%;
  top: 0%;
`

function HomepageHero() {
  return (
    <>
      <SectionStyled>
        <ImgStyled src={HeroImage} alt="Vector Monitor" />
        <div>
          <H1Styled>
            Don't waste time
            <br />
            on boring things
            <DecorStyled src={HeroDecor} alt="Decor icon" />
          </H1Styled>
          <ButtonStyled>GO EXPLORE</ButtonStyled>
        </div>
      </SectionStyled>
    </>
  )
}

export default HomepageHero
