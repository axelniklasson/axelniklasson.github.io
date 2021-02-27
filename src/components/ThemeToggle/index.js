import React from 'react';

import { ThemeContext } from '../../theme/theme-context';
import './style.scss';

const ThemeToggle = ({ bgColor, title, subtitle, ...rest }) => {
  const { toggleTheme, theme } = React.useContext(ThemeContext);

  return (
    <div className="themeToggle">
      <button onClick={toggleTheme}>
        Set theme to {theme.type === 'light' ? 'dark' : 'light'}
      </button>
      <pre>{JSON.stringify(theme)}</pre>
    </div>
  );
};

export default ThemeToggle;
