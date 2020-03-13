import * as React from "react";
import { AddTodo, TodoList } from "..";
import "./home.css";
import { IHome, Todo } from "../../models/home.model";

function Home(props: IHome.Props): JSX.Element {
  const [savedTodos, setSavedTodos] = React.useState<Todo[]>(props.savedTodos);

  const addTodo = (todo: string) => {
    const newTodo: Todo = {
      id: savedTodos.length + 1,
      task: todo,
      status: "ACTIVE"
    };

    setSavedTodos([...savedTodos, newTodo]);

    localStorage.setItem("todos", JSON.stringify([...savedTodos, newTodo]));
  };

  const activeTodos = () => {
    return savedTodos.filter(todo => todo.status === "ACTIVE");
  };

  const toggleStatus = (id: number) => {
    const updatedTodos = savedTodos.map(todo => {
      if (todo.id === id) {
        todo.status = todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE";
      }

      return todo;
    });

    setSavedTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="outer-div">
      <div className="header-div">
        <h1 data-testid="todos-counter">
          Total todos remaining: {activeTodos().length} out of{" "}
          {savedTodos.length}.
        </h1>
      </div>

      <div className="add-todo-div">
        <AddTodo saveTodo={addTodo} data-testid="add-todo-component"></AddTodo>
      </div>
      <div className="todo-list-div">
        <h1>All Todos</h1>
        <TodoList
          todos={savedTodos}
          changeStatus={toggleStatus}
          data-testid="todo-list-component"
        ></TodoList>
      </div>
    </div>
  );
}

export default Home;
