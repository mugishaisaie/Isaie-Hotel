import styled, { css } from "styled-components";

const Form = styled.form`
${(props) =>
    props.type === "regular" &&
    css`
    padding: 2.4rem 2rem;
      margin: 0 auto;
      width: 100%;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
     
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

/* responsiveness */
   @media (max-width: 767px) {
    padding:0;
    margin:0;
    width:100%;
        
      } 
`;

Form.defaultProps={
  type:"regular"
}

export default Form;
