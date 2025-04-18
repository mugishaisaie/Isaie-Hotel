import React from "react";
import styled from "styled-components";
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
  return (
    <StyledLogo>
      <Img src="/isaie-hotel.jpg" alt="Logo" />
      {/* <Title>ISAIE HOTEL</Title> */}
    </StyledLogo>
  );
}

export default Logo;
