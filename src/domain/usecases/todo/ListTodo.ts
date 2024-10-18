import { ITodoRepository } from "../../interfaces/repositories/ITodoRepository";

export class ListTodo {
  constructor(private todoRepository: ITodoRepository) {}
  async execute() {
    return this.todoRepository.listTodo();
  }
}
