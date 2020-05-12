import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../common/size";

const NavBarContainer = styled.div`
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  height: 50vh;
`;

const NavBarHeader = styled.div`
  position: absolute;
  width: 100vw;
`;

const NavBarTitle = styled.div`
  font-family: magical;
  text-decoration: underline;
  font-size: 120px;
  @media ${device.tablet} {
    font-size: 200px;
  }
  @media ${device.laptop} {
    font-size: 300px;
  }
  @media ${device.laptopL} {
    font-size: 400px;
  }
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
