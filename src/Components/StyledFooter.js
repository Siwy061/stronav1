import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
  margin-top: 10px;
  min-height: 30px;
  min-width: 100%;
  background-color: #1d3557;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
`;
export default function StyledFooter() {
  return <Footer> Stopka</Footer>;
}
