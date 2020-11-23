import React from "react"
import ElasticCarousel from "react-elastic-carousel"
import styled from "styled-components"
import { Link } from "gatsby"

import capsheaf from "../../assets/products/dumy.svg"

const DivStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 265px;
  width: 270px;
  cursor: pointer;
  background: #331f41;
  border: 3px solid #969393;
  box-sizing: border-box;
  border-radius: 2px;
`

const ImgStyled = styled.img`
  position: absolute;
  top: 10%;
`

const H1Styled = styled.h1`
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  color: #eee;
  left: 12%;
`

const PStyled = styled.p`
  position: absolute;
  font-family: Montserrat;
  font-size: 14px;
  color: #c4c4c4;
  top: 60%;
  padding: 10px 30px;
`

const ButtonStyled = styled.button`
  border-radius: 50%;
  border: none;
  color: white;
  position: absolute;
  top: 85%;
  right: 5%;
  padding: 5px 10px;
  background: #ab528d;
  transition: 0.4s ease;
  :hover {
    background-color: #f963c5;
    cursor: pointer;
  }
`

const MainDivStyled = styled.div`
  position: absolute;
  width: 95vw;
  margin: auto 30px;
  left: 0px;
  top: 100%;
`

export default function Carousel() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3 },
    { width: 1248, itemsToShow: 4 },
  ]
  return (
    <MainDivStyled className="App">
      <ElasticCarousel breakPoints={breakPoints}>
        <Link to="/product">
          <DivStyled>
            <ImgStyled src={capsheaf} alt="capsheaf " />
            <H1Styled>great dummy</H1Styled>
            <PStyled>
              Something that you trully need, but haven't know about it yet
            </PStyled>
            <ButtonStyled>+</ButtonStyled>
          </DivStyled>
        </Link>
        <Link to="/product">
          <DivStyled>
            <ImgStyled src={capsheaf} alt="capsheaf " />
            <H1Styled>basic dummy</H1Styled>
            <PStyled>
              Something that you trully need, but haven't know about it yet
            </PStyled>
            <ButtonStyled>+</ButtonStyled>
          </DivStyled>
        </Link>
        <Link to="/product">
          <DivStyled>
            <ImgStyled src={capsheaf} alt="capsheaf " />
            <H1Styled>dummy x pro</H1Styled>
            <PStyled>
              Something that you trully need, but haven't know about it yet
            </PStyled>
            <ButtonStyled>+</ButtonStyled>
          </DivStyled>
        </Link>
        <Link to="/product">
          <DivStyled>
            <ImgStyled src={capsheaf} alt="capsheaf " />
            <H1Styled>wooden dummy</H1Styled>
            <PStyled>
              Something that you trully need, but haven't know about it yet
            </PStyled>
            <ButtonStyled>+</ButtonStyled>
          </DivStyled>
        </Link>
        <Link to="/product">
          <DivStyled>
            <ImgStyled src={capsheaf} alt="capsheaf " />
            <H1Styled>daria dummy</H1Styled>
            <PStyled>Someone, who didn't used Frigma</PStyled>
            <ButtonStyled>+</ButtonStyled>
          </DivStyled>
        </Link>
      </ElasticCarousel>
    </MainDivStyled>
  )
}
