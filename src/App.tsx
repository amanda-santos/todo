import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { AddTask, Header } from "components";

import { GlobalStyle } from "styles/global";
import { defaultTheme } from "styles/themes/default";

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <AddTask />
      <GlobalStyle />
    </ThemeProvider>
  );
};
