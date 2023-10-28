//src/components/Header.js

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo> Fruit Emporium</Logo>
      <Nav>
        <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </Link>
        <Link
          to="/sellers"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sellers
        </Link>
        <Link
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 42px;
  margin: 0;
  color: darkblue;
`;

const Nav = styled.nav`
  display: flex;
  padding: 5px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  margin: 10px 10px;
  font-size: 16px;
  color: black;

  &.active {
    text-decoration: underline;
    color: blue;
  }
`;
