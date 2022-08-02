import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { AddTask, Header, TaskList } from "components";

import { GlobalStyle } from "styles/global";
import { defaultTheme } from "styles/themes/default";

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <AddTask />
      <TaskList />
      <GlobalStyle />
    </ThemeProvider>
  );
};
