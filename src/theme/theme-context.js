import * as React from "react";

export const themes = {
  light: {
    type: "light",
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    type: "dark",
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
