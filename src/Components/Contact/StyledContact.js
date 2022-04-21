import React from "react";
import styled from "styled-components";
import Map from "./StyledMap";
import Form from "./StyledForm";

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`;
const Container = styled.div`
  margin-top: 3rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin-top: 4rem;
    gap: 4rem;
  }
`;

export default function StyledContact() {
  return (
    <Contact>
      <Container>
        <div>Informacje kontaktowe</div>
        <Form />
      </Container>
      <Map />
    </Contact>
  );
}
