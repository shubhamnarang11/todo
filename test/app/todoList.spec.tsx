import * as React from "react";
import { TodoList } from "../../src/app/components";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import { Todo } from "../../src/app/models/home.model";

describe("TodoList Component", () => {
  it("Component loads with initial state", async () => {
    const toggleStatus = jest.fn();
    const { container } = render(
      <TodoList todos={[]} changeStatus={toggleStatus}></TodoList>
    );

    const todoList = getByTestId(container, "todo-list");

    expect(todoList.children).toHaveLength(0);
  });

  it("create a list when we pass some data", async () => {
    const toggleStatus = jest.fn();
    const listTestData: Todo[] = [{ id: 1, task: "test", status: "ACTIVE" }];

    const { container } = render(
      <TodoList todos={listTestData} changeStatus={toggleStatus}></TodoList>
    );

    const todoList = getByTestId(container, "todo-list");

    expect(todoList.children).toHaveLength(1);
  });

  it("add list item without strike through if status is 'ACTIVE'", async () => {
    const toggleStatus = jest.fn();
    const listTestData: Todo[] = [{ id: 1, task: "test", status: "ACTIVE" }];

    const { container } = render(
      <TodoList todos={listTestData} changeStatus={toggleStatus}></TodoList>
    );

    const normalListItem = getByTestId(container, "list-item");
    const todoList = getByTestId(container, "todo-list");

    expect(normalListItem).toBeTruthy();
    expect(todoList.children).toHaveLength(1);
  });

  it("add list item with strike through if status is 'COMPLETED'", async () => {
    const toggleStatus = jest.fn();
    const listTestData: Todo[] = [{ id: 1, task: "test", status: "COMPLETED" }];

    const { container } = render(
      <TodoList todos={listTestData} changeStatus={toggleStatus}></TodoList>
    );

    const strikedListItem = getByTestId(container, "striked-list-item");
    const todoList = getByTestId(container, "todo-list");

    expect(strikedListItem).toBeTruthy();
    expect(todoList.children).toHaveLength(1);
  });

  it("change status of list item when clicked on it", async () => {
    const toggleStatus = jest.fn();
    const listTestData: Todo[] = [{ id: 1, task: "test", status: "COMPLETED" }];

    const { container } = render(
      <TodoList todos={listTestData} changeStatus={toggleStatus}></TodoList>
    );

    const strikedListItem = getByTestId(container, "striked-list-item");
    fireEvent.click(strikedListItem);

    expect(strikedListItem).toBeTruthy();
    expect(toggleStatus).toHaveBeenCalledWith(1);
  });
});
