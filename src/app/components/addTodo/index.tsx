import * as React from "react";
import { IAddTodo } from "../../models/addTodo.model";
import "./addTodo.css";

function AddTodo(props: IAddTodo.Props): JSX.Element {
  const [task, setTask] = React.useState<string>("");

  const saveTask = () => {
    props.saveTodo(task);
    setTask("");
  };

  return (
    <div className="main-div">
      <h2 className="heading">Add Todo</h2>
      <input
        data-testid="task"
        type="text"
        id="todo-title"
        placeholder="Enter your task..."
        value={task}
        onChange={event => setTask(event.target.value)}
      />
      <input
        data-testid="save-button"
        type="button"
        value="Save"
        onClick={saveTask}
        disabled={task === ""}
        className={task === "" ? "ƒ" : "active"}
      />
    </div>
  );
}

export default AddTodo;
