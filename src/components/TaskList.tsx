import React from "react";

interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

interface Props {
  todos: Todo[];
}

const TaskList = ({ todos }: Props) => {
  return (
    <ul className="list-group form-check">
      {todos.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          <input
            className="form-check-input"
            id={todo.description}
            type="checkbox"
          />
          <label
            className={
              todo.isDone
                ? "strikethrough form-check-label"
                : "form-check-label"
            }
            htmlFor={todo.description}
          >
            {todo.description}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
