import { ReactElement } from "react";
import { PlusCircle } from "phosphor-react";

import { AddTaskContainer } from "./styles";

export const AddTask = (): ReactElement => {
  return (
    <AddTaskContainer>
      <input type="text" placeholder="Add a new task" />
      <button type="submit">
        <PlusCircle size={32} />
      </button>
    </AddTaskContainer>
  );
};
