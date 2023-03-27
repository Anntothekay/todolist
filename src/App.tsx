import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const initTodos = [
    { id: 1, description: "laundry", isDone: false },
    { id: 2, description: "groceries", isDone: false },
    { id: 3, description: "cleaning", isDone: true },
  ];
  const [todos, setTodos] = useState(initTodos);

  const toggleDone = () => {
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <TaskList todos={todos} toggleDone={toggleDone} />
    </div>
  );
}

export default App;
