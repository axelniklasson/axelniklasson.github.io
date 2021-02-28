import React from "react";
import styled from "styled-components";

import { device } from "../../theme/breakpoints";

const Wrapper = styled.div`
  text-align: center;
  padding: 50px 0;
  background-color: ${(props) => props.bgColor};
`;

const Title = styled.h2`
  font-size: 60px;
  margin-top: 0;
  margin-bottom: 20px;
  line-height: 1;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-size: 30px;
  line-height: 1;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const Divider = ({ id, bgColor, title, subtitle }) => {
  return (
    <Wrapper id={id} bgColor={bgColor}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default Divider;
