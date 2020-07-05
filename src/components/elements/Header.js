import React from "react";
import Logo1 from "../images/reactMovie_logo.png";
import Logo2 from "../images/tmdb_logo.svg";
import styled from "styled-components";

import { StyledHeader, RMDBLogo, TMDBLogo } from "../styles/StyledHeader";

// learn how to create a basic styled component
// how to handle props in styled components
// global style with styled components

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <RMDBLogo src={Logo1} alt="" />
      <TMDBLogo src={Logo2} alt="" />
    </div>
  </StyledHeader>
);

export default Header;
