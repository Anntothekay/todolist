import React from "react";

interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

interface Props {
  todos: Todo[];
  toggleDone: (id: number) => void;
  onCleanUp: () => void;
}

const TaskList = ({ todos, toggleDone, onCleanUp }: Props) => {
  return (
    todos.length > 0 && (
      <>
        <ul className="list form-check mb-3">
          {todos.map((todo) => (
            <li className="list-item" key={todo.id}>
              <input
                onChange={() => toggleDone(todo.id)}
                id={todo.description}
                type="checkbox"
                checked={todo.isDone}
              />
              <label
                className={todo.isDone ? "strikethrough" : ""}
                htmlFor={todo.description}
              >
                {todo.description}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={onCleanUp} className="btn btn-outline-danger">
          Clean Up!
        </button>
      </>
    )
  );
};

export default TaskList;
