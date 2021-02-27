import axios from 'axios';
import React from 'react';

import Spinner from '../../components/Spinner';
import './style.scss';

const Footer = () => {
  const [loading, setLoading] = React.useState(true);
  const [sha, setSha] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        'https://api.github.com/repos/axelniklasson/axelniklasson.se/branches/master',
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
    <div className="footer">
      <p>
        Version{' '}
        <a href="https://github.com/axelniklasson/axelniklasson.se">{sha}</a>
      </p>
    </div>
  );
};

export default Footer;
