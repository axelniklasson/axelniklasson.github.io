import React from "react";
import styled from "styled-components";

import LINKS from "./links";
import SocialItem from "./social-item";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  flex-wrap: wrap;
  color: white;
  background: linear-gradient(to right, #243b55, #141e30);
`;

const Heading = styled.h2`
  color: white;
  flex-basis: 100%;
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
  margin-top: 0;
`;

const Social = () => (
  <Wrapper>
    <Heading>Find me on the Internet</Heading>
    {LINKS.map((link) => (
      <SocialItem {...link} />
    ))}
  </Wrapper>
);

export default Social;
