import axios from "axios";
import React from "react";
import styled from "styled-components";

import Spinner from "../../components/Spinner";

const Wrapper = styled.div`
  background: black;
  padding: 25px;
  color: white;
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
  font-weight: 400;
`;

const Link = styled.a`
  font-weight: bold;
`;

const Footer = () => {
  const [loading, setLoading] = React.useState(true);
  const [sha, setSha] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/axelniklasson/axelniklasson.se/branches/master",
      )
      .then((res) => {
        setLoading(false);
        setSha(res.data.commit.sha.substring(0, 7));
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (!sha) {
    return (
      <div className="footer">
        <p>Could not fetch version information</p>
      </div>
    );
  }

  return (
    <Wrapper>
      <Text>
        Version{" "}
        <Link href="https://github.com/axelniklasson/axelniklasson.se">
          {sha}
        </Link>
      </Text>
    </Wrapper>
  );
};

export default Footer;
