import { createContext, ReactNode, useContext } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";

export type TasksContextType = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
};

export const TasksContext = createContext({} as TasksContextType);

type TasksContextProviderProps = {
  children: ReactNode;
};

export const TasksContextProvider = ({
  children,
}: TasksContextProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>(
    "@todo:tasks-state-1.0.0",
    []
  );

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error(
      "useTasksContext must be used within a TasksContextProvider"
    );
  }

  return context;
};
