import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background-color: #282a43;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
`;

const Slink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: white;
  &:focus {
    color: red;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Slink to="/">Home</Slink>
      <Slink to="/text">Text</Slink>
    </Nav>
  );
};

export default Navbar;
