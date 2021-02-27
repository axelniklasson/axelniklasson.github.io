import * as React from "react";

import { ThemeContext } from "../theme/theme-context";

export default function useTheme() {
  const contextValue = React.useContext(ThemeContext);
  return contextValue.theme;
}
