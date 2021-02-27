import React from "react";
import styled from "styled-components";

import { device } from "../../theme/breakpoints";

const StyledContainer = styled.div`
  padding: 50px 0;
  width: 100%;
  max-width: 1040px;
  padding: 50px 0;
  margin: auto;

  @media ${device.mobile} {
    text-align: center;
    width: 80%;
  }
`;

export const Container = ({ id, className, children }) => (
  <StyledContainer id={id} className={className}>
    {children}
  </StyledContainer>
);
