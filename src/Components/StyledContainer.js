import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #ffe8d6;
  min-height: 100vh;
  margin-top: 10px;
  box-shadow: -5px -2px 48px -29px rgba(10, 10, 20, 1);
  border-radius: 10px;
  opacity: 1;
  width: 100%;
  @media (min-width: 871px) {
    max-width: 60%;
    margin: 15px auto;
    min-height: 100vh;
  }
  animation: slideIn 2s forwards;
  @keyframes slideIn {
    0% {
      opacity: 0;
      margin-top: 10%;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function StyledContainer(props) {
  return <Container>{props.children}</Container>;
}
