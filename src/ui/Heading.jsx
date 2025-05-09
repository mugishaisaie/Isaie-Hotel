import styled, { css } from "styled-components";

const Heading = styled.h1`
font-size: 30px;
font-weight: 600;
/* background-color: yellow; */
${(props)=>props.as === "h4" &&  css`
font-size: 3rem;
text-align: center;
font-weight:600

@media (max-width: 679px) {
    font-size: 1.4rem;
    
}
`}

@media (max-width: 679px) {
    font-size: 1.4rem;
    
}
`


export default Heading;