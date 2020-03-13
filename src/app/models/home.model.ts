export namespace IHome {
  export interface Props {
    savedTodos: Todo[];
  }
  export interface State {
    savedTodos: Todo[];
  }
}

export interface Todo {
  id: number;
  task: string;
  status: "ACTIVE" | "COMPLETED";
}
