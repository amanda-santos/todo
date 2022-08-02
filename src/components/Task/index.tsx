import { ReactElement } from "react";

export const Task = ({ task }: { task: Task }): ReactElement => {
  return (
    <div>
      <input
        type="checkbox"
        id={task.uuid}
        value={task.uuid}
        checked={task.completed}
      />
      <label htmlFor={task.uuid}>{task.description}</label>
    </div>
  );
};
