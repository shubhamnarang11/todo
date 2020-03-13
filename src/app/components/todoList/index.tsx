import * as React from "react";
import { ITodoList } from "../../models/todoList.model";
import "./todoList.css";

function TodoList(props: ITodoList.Props): JSX.Element {
  const toggleStatus = (id: number) => {
    props.changeStatus(id);
  };

  return (
    <ul data-testid="todo-list">
      {props.todos.map(todo =>
        todo.status === "ACTIVE" ? (
          <li
            className="list-item"
            onClick={event => toggleStatus(todo.id)}
            data-testid="list-item"
            key={todo.id}
          >
            <p>{todo.task}</p>
          </li>
        ) : (
          <li
            className="list-item"
            onClick={event => toggleStatus(todo.id)}
            data-testid="striked-list-item"
            key={todo.id}
          >
            <del>
              <p>{todo.task}</p>
            </del>
          </li>
        )
      )}
    </ul>
  );
}

export default TodoList;
