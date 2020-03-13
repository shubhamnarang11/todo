import * as React from "react";
import { AddTodo } from "../../src/app/components";
import { render, getByTestId, fireEvent } from "@testing-library/react";

describe("AddTodo Component", () => {
  it("Component loads with initial state", async () => {
    const addTodo = jest.fn();
    const { container } = render(<AddTodo saveTodo={addTodo}></AddTodo>);

    const taskInput = getByTestId(container, "task");
    const saveButton = getByTestId(container, "save-button");

    expect(taskInput.textContent).toBe("");
    expect(saveButton.getAttribute("disabled")).toEqual("");
  });

  it("should enable save button when task input has some value", async () => {
    const addTodo = jest.fn();
    const { container } = render(<AddTodo saveTodo={addTodo}></AddTodo>);

    const taskInput = getByTestId(container, "task");
    const saveButton = getByTestId(container, "save-button");

    fireEvent.change(taskInput, { target: { value: "test" } });
    
    expect(saveButton.getAttribute("disabled")).toEqual(null);
  });

  it("should call addTodo function when user save todo", async () => {
    const addTodo = jest.fn();
    const { container } = render(<AddTodo saveTodo={addTodo}></AddTodo>);

    const taskInput = getByTestId(container, "task");
    const saveButton = getByTestId(container, "save-button");

    fireEvent.change(taskInput, { target: { value: "test" } });
    fireEvent.click(saveButton);
    
    expect(addTodo).toHaveBeenCalledWith("test");
  });

  it("should not call addTodo function when user save todo with wroong data", async () => {
    const addTodo = jest.fn();
    const { container } = render(<AddTodo saveTodo={addTodo}></AddTodo>);

    const taskInput = getByTestId(container, "task");
    const saveButton = getByTestId(container, "save-button");

    fireEvent.change(taskInput, { target: { value: "test" } });
    fireEvent.click(saveButton);
    
    expect(addTodo).not.toHaveBeenCalledWith("test123");
  });
});
