import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background-color: #231f20;
  position: fixed; /* makes the navbar stick to the top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* keeps it above everything */
`;

const NavItem = styled(Link)`
  color: #f4e8deff;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/work">Work</NavItem>
      <NavItem to="/skills">Skills</NavItem>
      <NavItem to="/resources">Resources</NavItem>
      <NavItem to="/developer-setup">Developer Setup</NavItem>
    </Nav>
  );
};

export default Navbar;
