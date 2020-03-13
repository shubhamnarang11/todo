import * as React from "react";
import { Home } from "./components";

export function App() {
  let todos = localStorage.getItem("todos");

  if (!todos) {
    todos = JSON.stringify([]);
    localStorage.setItem("todos", todos);
  }
  
  return (
    <div>
      <Home savedTodos={JSON.parse(todos)}></Home>
    </div>
  );
}
