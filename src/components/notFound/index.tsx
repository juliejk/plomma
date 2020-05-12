import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  padding: 30px;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const NotFound = () => (
  <NotFoundContainer>
    <h2>Nothing to see here</h2>
    <Link to="/">Move along</Link>
  </NotFoundContainer>
);

export default NotFound;
