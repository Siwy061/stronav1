import React from "react";
import "./App.css";
import Nav from "./Components/NavBar/StyledNav";
import Container from "./Components/StyledContainer";
import Footer from "./Components/StyledFooter";
import HomePage from "./Components/StyledHomePage";
import Contact from "./Components/Contact/StyledContact";
import ErrorPage from "./Components/StyledErrorPage";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
