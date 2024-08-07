export interface Task {
  id: number;
  title: string;
}

interface DeleteTaskAction {
  type: "DELETE";
  taskId: number;
}

interface AddTaskAction {
  type: "ADD";
  task: Task;
}

export type TaskAction = DeleteTaskAction | AddTaskAction;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];

    case "DELETE":
      return tasks.filter((task) => task.id !== action.taskId);

    default:
      return tasks;
  }
};

export default taskReducer;
