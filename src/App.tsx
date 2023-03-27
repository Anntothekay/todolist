import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";

function App() {
  const initTodos = [
    { id: 1, description: "laundry", isDone: false },
    { id: 2, description: "groceries", isDone: false },
    { id: 3, description: "cleaning", isDone: true },
  ];

  const [todos, setTodos] = useState(initTodos);
  const [idCounter, setIdCounter] = useState(initTodos.length + 1);

  const toggleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const cleanUp = () => {
    setTodos(todos.filter((todo) => todo.isDone === false));
  };

  return (
    <div className="app">
      <InputForm
        onSave={(newTodo: string) => {
          setTodos([
            ...todos,
            { id: idCounter, description: newTodo, isDone: false },
          ]);
          setIdCounter(idCounter + 1);
        }}
      />
      <TaskList todos={todos} onCleanUp={cleanUp} toggleDone={toggleDone} />
    </div>
  );
}

export default App;
