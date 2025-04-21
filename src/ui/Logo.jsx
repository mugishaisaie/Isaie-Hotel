import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6.6rem;
  width: auto;
`;

const Title = styled.h2`
position: absolute;
/* top: 10rem;
left: 5rem; */
text-align: center;

`

function Logo() {
  const {isDarkMode} = useDarkMode();
const src = isDarkMode ?"logo-dark.png" : "logo-light.png"
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
      {/* <Title>ISAIE HOTEL</Title> */}
    </StyledLogo>
  );
}

export default Logo;
