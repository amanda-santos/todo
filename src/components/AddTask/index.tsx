import { FormEvent, ReactElement, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuid } from "uuid";

import { useTasksContext } from "contexts/TasksContext";
import { AddTaskForm } from "components/AddTask/styles";

export const AddTask = (): ReactElement => {
  const { tasks: storedTasks, setTasks } = useTasksContext();

  const [newTaskDescription, setNewTaskDescription] =
    useState<Task["description"]>("");

  const handleCreateTask = (event: FormEvent): void => {
    event.preventDefault();

    const newTask = {
      uuid: uuid(),
      description: newTaskDescription,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const tasks = [...storedTasks, newTask];

    setTasks(tasks);
    setNewTaskDescription("");
  };

  return (
    <AddTaskForm onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTaskDescription}
        onChange={({ target }) => setNewTaskDescription(target.value)}
      />
      <button type="submit" title="Add task">
        <PlusCircle size={32} />
      </button>
    </AddTaskForm>
  );
};
