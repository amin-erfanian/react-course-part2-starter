import { useReducer } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import TaskList from "./state-management/TaskList";
import TaskContext from "./state-management/context/tasksContext";
import taskReducer from "./state-management/reducers/taskReducer";
import UserContext from "./state-management/context/userContext";
import userReducer from "./state-management/reducers/userReducer";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [username, authDispatch] = useReducer(userReducer, "");

  return (
    <UserContext.Provider value={{ username, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <TaskList />
      </TaskContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
