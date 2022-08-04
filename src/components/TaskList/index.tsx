import { ReactElement } from "react";

import { Task } from "components/Task";
import { useTasksContext } from "contexts/TasksContext";
import {
  Amount,
  MainContainer,
  TasksInfoContainer,
  TasksListContainer,
} from "components/TaskList/styles";

export const TaskList = (): ReactElement => {
  const { tasks } = useTasksContext();

  const tasksAmount = tasks.length;
  const doneTasksAmount = tasks.filter((task) => task.completed).length;

  return (
    <MainContainer>
      <TasksInfoContainer>
        <div>
          Created tasks <Amount>{tasksAmount}</Amount>
        </div>
        <div>
          Done{" "}
          <Amount>
            {doneTasksAmount} of {tasksAmount}
          </Amount>
        </div>
      </TasksInfoContainer>
      <TasksListContainer>
        {tasks.map((task) => (
          <Task key={task.uuid} task={task} />
        ))}
      </TasksListContainer>
    </MainContainer>
  );
};
