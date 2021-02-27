import React from 'react';

import { Container } from '../../components/Layout';
import PortfolioItem from '../../components/PortfolioItem';
import Spinner from '../../components/Spinner';
import useContentfulClient from '../../hooks/useContentfulClient';

const Portfolio = () => {
  const [loading, setLoading] = React.useState(true);
  const [portfolio, setPortfolio] = React.useState([]);
  const client = useContentfulClient();

  React.useEffect(() => {
    async function fetchData() {
      const data = await client.getPortfolioSection();
      setLoading(false);
      setPortfolio(data);
    }

    fetchData();
  }, []);

  return (
    <Container id="portfolio">
      {loading ? (
        <Spinner />
      ) : (
        portfolio.map((el, index) => (
          <PortfolioItem key={index} {...el} alignLeft={index % 2 === 0} />
        ))
      )}
    </Container>
  );
};

export default Portfolio;
