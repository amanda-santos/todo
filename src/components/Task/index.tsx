import { ReactElement, useState } from "react";
import produce from "immer";
import { Trash } from "phosphor-react";

import {
  CustomCheckbox,
  DeleteTaskButton,
  TaskCheckbox,
  TaskContainer,
} from "components/Task/styles";
import { useTasksContext } from "contexts/TasksContext";

export const Task = ({ task }: { task: Task }): ReactElement => {
  const { tasks, setTasks } = useTasksContext();

  const currentTaskIndex = tasks.findIndex((t) => t.uuid === task.uuid);

  const handleCheckboxChange = (): void => {
    setTasks(
      produce(tasks, (draft) => {
        draft[currentTaskIndex].completed = !task.completed;
      })
    );
  };

  const handleDeleteTaskClick = (): void => {
    setTasks(
      produce(tasks, (draft) => {
        draft.splice(currentTaskIndex, 1);
      })
    );
  };

  return (
    <TaskContainer>
      <TaskCheckbox $isCompleted={task.completed}>
        <input
          type="checkbox"
          id={task.uuid}
          value={task.uuid}
          checked={task.completed}
          onChange={handleCheckboxChange}
        />
        <CustomCheckbox
          onClick={handleCheckboxChange}
          className="checkbox-element"
        ></CustomCheckbox>
        <label htmlFor={task.uuid}>{task.description}</label>
      </TaskCheckbox>

      <DeleteTaskButton
        type="button"
        title="Delete task"
        onClick={handleDeleteTaskClick}
      >
        <Trash size={20} />
      </DeleteTaskButton>
    </TaskContainer>
  );
};
