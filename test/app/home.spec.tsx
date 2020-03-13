import * as React from "react";
import { Home } from "../../src/app/components";
import { render,  getByTestId} from "@testing-library/react";

describe("Home Component", () => {
  it("Component loads with 0 Active Todos", async () => {
    const { container } = render(<Home savedTodos={[]}></Home>);

    const todoHeadCounter = getByTestId(container, "todos-counter");

    expect(todoHeadCounter.textContent).toBe("Total todos remaining: 0 out of 0.");
  });
});
