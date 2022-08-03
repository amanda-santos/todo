import { ReactElement, useState } from "react";
import { Trash } from "phosphor-react";

import {
  CustomCheckbox,
  TaskCheckbox,
  TaskContainer,
} from "components/Task/styles";

export const Task = ({ task }: { task: Task }): ReactElement => {
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheckboxChange = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <TaskContainer>
      <TaskCheckbox>
        <input
          type="checkbox"
          id={task.uuid}
          value={task.uuid}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CustomCheckbox
          onClick={handleCheckboxChange}
          className="checkbox-element"
        ></CustomCheckbox>
        <label htmlFor={task.uuid}>{task.description}</label>
      </TaskCheckbox>

      <Trash size={20} />
    </TaskContainer>
  );
};
