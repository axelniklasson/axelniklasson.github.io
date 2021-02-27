import React from 'react';
import styled from 'styled-components';

import { device } from '../../theme/breakpoints';

// TODO migrate scaleOnHover
const Wrapper = styled.div`
  margin: 0 75px;
  text-align: center;
  cursor: pointer;

  p {
    margin: 0;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 20px;
  }

  img {
    width: 75px;
    height: 75px;
  }

  @media ${device.mobile} {
    flex-basis: 100%;
    margin: 25px 0;
  }
`;

const SocialItem = ({ icon, text, url }) => {
  function onClick() {
    window.open(url, '_blank');
  }

  return (
    <Wrapper onClick={onClick}>
      <img src={icon} alt={text} />
      <p>{text}</p>
    </Wrapper>
  );
};

export default SocialItem;
