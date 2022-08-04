import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { AddTask, Header, TaskList } from "components";

import { GlobalStyle } from "styles/global";
import { defaultTheme } from "styles/themes/default";
import { TasksContextProvider } from "contexts/TasksContext";

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TasksContextProvider>
        <Header />
        <AddTask />
        <TaskList />
        <GlobalStyle />
      </TasksContextProvider>
    </ThemeProvider>
  );
};
