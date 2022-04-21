import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #8e6e53;

  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  animation: Slide 2s forwards;

  @keyframes Slide {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;
const Menu = styled.div`
  display: flex;

  a {
    color: white;
    padding: 10px;
    border-radius: 10px;

    @media (max-width: 870px) {
      margin-top: 30px;
    }
  }
  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    max-height: ${({ isMenuOpened }) => (isMenuOpened ? "300px" : "0px")};
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: max-height 0.3s ease-in;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  max-width: 60%;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 350px) {
    h2 {
      display: none;
    }
  }
  @media (min-width: 871px) {
    h2 {
      padding-left: 10rem;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
  }
`;
const Logo = styled.a`
  cursor: pointer;
  color: white;
`;

export default function StyledNav() {
  const [isMenuOpened, setisMenuOpened] = useState(false);
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#ffe8d6" : "",
      color: isActive ? "black" : "",
      boxShadow: isActive ? "0px 0px 13px 0px rgba(66, 68, 90, 1)" : "",
    };
  };
  return (
    <Nav>
      <Wrapper>
        <Logo
          onClick={() => {
            navigate("/");
            setisMenuOpened(false);
          }}
        >
          Logo
        </Logo>
        <h2>
          Auto Lakiernia- <br />
          Edyta Szewczyk
        </h2>

        <Hamburger
          onClick={() => {
            setisMenuOpened(!isMenuOpened);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        <Menu isMenuOpened={isMenuOpened}>
          <NavLink
            style={navLinkStyles}
            onClick={() => {
              setisMenuOpened(false);
            }}
            to="/"
          >
            Home Page
          </NavLink>
          <NavLink
            style={navLinkStyles}
            onClick={() => {
              setisMenuOpened(false);
            }}
            to="/Contact"
          >
            Contact
          </NavLink>
        </Menu>
      </Wrapper>
    </Nav>
  );
}
