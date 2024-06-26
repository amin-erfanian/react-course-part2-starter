import "./App.css";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <h1>
      <TodoForm />
      <TodoList />
    </h1>
  );
}

export default App;
