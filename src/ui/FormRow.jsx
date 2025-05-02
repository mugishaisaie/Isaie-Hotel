import React from 'react'
import styled from 'styled-components';
const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 1rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width:769px) {
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    margin: 0;
    gap: 0.5rem;

    
  }
`;

const Label = styled.label`
 flex: 1;
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
function  FormRow({label,error,children}) {
  return (
   
      <StyledFormRow>
      {label &&  <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
        {error && <Error>{error}</Error>}
      </StyledFormRow>
  )
}

export default FormRow
