import throttle from 'lodash.throttle';
import React from 'react';

import Divider from './components/Divider';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './containers/About';
import Experience from './containers/Experience';
import Footer from './containers/Footer';
import Portfolio from './containers/Portfolio';
import Social from './containers/Social';
import { ThemeContext, themes } from './theme/theme-context';

const App = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [theme, setTheme] = React.useState(themes.light);
  const headerRef = React.useRef(null);

  function toggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  function updateNav() {
    headerRef.current &&
      setShowNavbar(window.pageYOffset >= headerRef.current.clientHeight);
  }

  function onScroll() {
    throttle(updateNav, 300);
  }

  React.useEffect(() => {
    updateNav();
    window.addEventListener('scroll', throttle(updateNav, 100));

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar showNavbar={showNavbar} />
      <Header ref={headerRef} />

      <About />

      <Divider
        id="portfolio"
        bgColor="rgba(48,116,60,0.83)"
        title="<Portfolio />"
        subtitle="Selected personal projects"
      />

      <Portfolio />

      <Divider
        id="experience"
        bgColor="rgba(179,129,19,0.83)"
        title="<Experience />"
        subtitle="Things I have done so far"
      />

      <Experience />

      <Social />

      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;
