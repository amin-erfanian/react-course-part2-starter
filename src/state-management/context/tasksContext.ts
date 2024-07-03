import React from "react";
import { Task, TaskAction } from "../reducers/taskReducer";

interface TasksContext {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}
export default React.createContext<TasksContext>({} as TasksContext);
