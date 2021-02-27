import React from 'react';
import styled from 'styled-components';

import Content from '../../components/Content';
import { Container } from '../../components/Layout';
import Spinner from '../../components/Spinner';
import Timeline from '../../components/Timeline';
import useContentfulClient from '../../hooks/useContentfulClient';
import { device } from '../../theme/breakpoints';

const StyledContainer = styled(Container)`
  display: flex;
  min-height: 500px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  flex-basis: 60%;

  @media ${device.mobile} {
    flex-basis: 100%;
    margin-bottom: 25px;
  }
`;

const TimelineWrapper = styled.div`
  flex-basis: 40%;
`;

const About = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    heading: '',
    content: '',
    timelineItems: [],
  });
  const client = useContentfulClient();

  React.useEffect(() => {
    async function fetchData() {
      const data = await client.getAboutSection();
      setLoading(false);
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <StyledContainer id="about">
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <ContentWrapper>
            <h2>{data.heading}</h2>
            <Content markdown={data.content} />
          </ContentWrapper>

          <TimelineWrapper>
            <Timeline items={data.timelineItems} />
          </TimelineWrapper>
        </React.Fragment>
      )}
    </StyledContainer>
  );
};

export default About;
