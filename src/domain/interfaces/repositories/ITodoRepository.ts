import { Todo } from "../../entities/Todo";

export interface ITodoRepository {
  listTodo(): Promise<Todo[]>;
}
