import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 320px;
  background: url(../img/img.jpg) center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  font-family: "Lobster", cursive;
  font-weight: normal;
`;

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <StyledH1>{siteTitle}</StyledH1>
    </StyledHeader>
  );
};

export default Header;
