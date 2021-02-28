import React from "react";
import styled, { css } from "styled-components";

import useContentfulClient from "../../hooks/useContentfulClient";
import { device } from "../../theme/breakpoints";
import { Container } from "../Layout/index";

const sharedTextStyle = css`
  color: rgba(255, 255, 255, 0.55);
  font-size: 40px;
  margin: 0;
  font-weight: normal;

  &:first-child {
    font-size: 60px;

    .bold {
      color: white;
    }
  }

  @media ${device.mobile} {
    font-size: 20px;

    &:first-child {
      font-size: 30px;
    }
  }
`;

const Wrapper = styled.div`
  height: 450px;
  background: linear-gradient(-269deg, #40485d 0%, #000000 100%);
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    height: auto;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  margin-left: 50px;

  @media ${device.mobile} {
    order: 2;
    margin: auto;
  }
`;

const Image = styled.img`
  width: 250px;
  border-radius: 50%;

  @media ${device.mobile} {
    order: 1;
    margin: 20px 0;
    width: 200px;
    height: 200px;
  }
`;

const Title = styled.h1`
  ${sharedTextStyle}
`;
const Subtitle = styled.h2`
  ${sharedTextStyle}
`;

const Header = React.forwardRef((props, ref) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    head1: "",
    head2: "",
    sub1: "",
    sub2: "",
    profilePicture: "",
  });
  const client = useContentfulClient();

  React.useEffect(() => {
    async function fetchData() {
      const data = await client.getHeaderSection();
      setLoading(false);
      setData(data);
    }

    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Wrapper id="header" ref={ref}>
      <StyledContainer>
        <Image src={data.profilePicture} alt="profile" />

        <ContentWrapper>
          <Title>
            {data.head1} <span className="bold">{data.head2}</span>
          </Title>
          <Subtitle>
            {data.sub1}
            <br />
            {data.sub2}
          </Subtitle>
        </ContentWrapper>
      </StyledContainer>
    </Wrapper>
  );
});

export default Header;
