
import React from "react";
import styled from "styled-components";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import LoginForm from '../features/authentication/LoginForm'
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns:minmax(0,48rem) ;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 0.7rem 1rem;
  /* @media (max-width: 768px) {
  grid-template-columns: 100%;
} */
  /* background: red; */
`;

function Login() {
  return <LoginLayout>
    <Logo />
    <Heading as="h4">Login to your Account</Heading>
    <LoginForm />
  </LoginLayout>;
}

export default Login;
