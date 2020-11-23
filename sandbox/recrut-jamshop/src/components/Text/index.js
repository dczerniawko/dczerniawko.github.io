import React from "react"
import styled from "styled-components"

const DivStyled = styled.div`
  padding: 4em 8em;
  font-family: "Roboto";
`

const H2Styled = styled.h2`
  position: absolute;
  left: 130px;
  top: 77%;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1.8rem;
  color: #eeeeee;
`

const PStyled = styled.p`
  position: absolute;
  width: 370px;
  left: 130px;
  top: 85%;
  font-family: Montserrat;
  font-size: 0.9rem;
  color: #c4c4c4;
`

function Text() {
  return (
    <>
      <DivStyled>
        <H2Styled>Explore community choices</H2Styled>
        <PStyled>
          Updated daily based on most popular choices among dev community
        </PStyled>
      </DivStyled>
    </>
  )
}

export default Text
