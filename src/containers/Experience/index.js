import React from "react";

import Content from "../../components/Content";
import ExperienceTimeline from "../../components/ExperienceTimeline";
import { Container } from "../../components/Layout";
import Spinner from "../../components/Spinner";
import useContentfulClient from "../../hooks/useContentfulClient";

const Experience = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    heading: "",
    content: "",
    experienceItems: [],
  });
  const client = useContentfulClient();

  React.useEffect(() => {
    async function fetchData() {
      const data = await client.getExperienceSection();
      setLoading(false);
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <Container id="experience">
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <React.Fragment>
            <h2>{data.heading}</h2>
            <Content markdown={data.content} />
          </React.Fragment>

          <ExperienceTimeline items={data.experienceItems} />
        </React.Fragment>
      )}
    </Container>
  );
};

export default Experience;
