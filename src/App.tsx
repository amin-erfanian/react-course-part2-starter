import "./App.css";
import NavBar from "./state-management/NavBar";
import TaskList from "./state-management/TaskList";
import AuthProvider from "./state-management/components/AuthProvider";
import TasksProvider from "./state-management/components/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <TaskList />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
