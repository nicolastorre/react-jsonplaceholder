import { TodoDataSource } from "./../dataSources/TodoDataSource";
import { Todo } from "../../domain/entities/Todo";
import { ITodoRepository } from "../../domain/interfaces/repositories/ITodoRepository";

export class TodoRepositoryImpl implements ITodoRepository {
  constructor(private todoDataSource: TodoDataSource) {}
  async listTodo(): Promise<Todo[]> {
    try {
      return this.todoDataSource.listTodo();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "error");
      } else {
        throw new Error("Unknown error");
      }
    }
  }
}
