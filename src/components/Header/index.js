import React from 'react';

import useContentfulClient from '../../hooks/useContentfulClient';
import './style.scss';

const Header = React.forwardRef((props, ref) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    head1: '',
    head2: '',
    sub1: '',
    sub2: '',
    profilePicture: '',
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
    <div className="header" id="header" ref={ref}>
      <div className="container">
        <img src={data.profilePicture} alt="profile" />

        <div className="content">
          <h1>
            {data.head1} <span className="bold">{data.head2}</span>
          </h1>
          <h2>
            {data.sub1}
            <br />
            {data.sub2}
          </h2>
        </div>
      </div>
    </div>
  );
});

export default Header;
