import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      Todo
      <GlobalStyle />
    </ThemeProvider>
  );
};
