import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 50vh;
`;

const NavBarHeader = styled.div`
  position: absolute;
  width: 100vw;
`;

const NavBarTitle = styled.div`
  font-family: magical;
  font-size: calc(100vh / 6);
  text-decoration: underline;
`;

const NavBar = () => (
  <Link to="/">
    <NavBarContainer>
      <img
        alt="..."
        width="100%"
        height="100%"
        style={{ opacity: 0.5 }}
        src="/img/anime_gun.jpg"
      />
      <NavBarHeader>
        <NavBarTitle>pl0mm4</NavBarTitle>
      </NavBarHeader>
    </NavBarContainer>
  </Link>
);

export default NavBar;
