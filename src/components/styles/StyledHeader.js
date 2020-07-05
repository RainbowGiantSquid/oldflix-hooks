import styled from "styled-components";

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 14%;
    padding: 40px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const RMDBLogo = styled.img`
  width: 30%;
  margin-top: 1%;
`;

export const TMDBLogo = styled.img`
  width: 20%;
  float: right;
`;
