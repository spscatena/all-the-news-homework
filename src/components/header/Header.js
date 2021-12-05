import React from "react";
import { StyledHeader, StyledH1 } from "./styles";

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <StyledH1>{siteTitle}</StyledH1>
    </StyledHeader>
  );
};

export default Header;
