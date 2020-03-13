import { Todo } from "./home.model";

export namespace ITodoList {
  export interface Props {
    todos: Todo[];
    changeStatus: (id: number) => void;
  }
}
