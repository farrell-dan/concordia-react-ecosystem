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
        <NavLinkItem to="/"> Home </NavLinkItem>
        <NavLinkItem to="/about"> About </NavLinkItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  padding: 5px;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  margin: 10px 10px;
  font-size: 16px;
`;
