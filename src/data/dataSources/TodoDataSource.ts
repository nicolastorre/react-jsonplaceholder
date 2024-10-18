import { BASE_URL } from "../../config/httpConfig";
import { Todo } from "../../domain/entities/Todo";

export class TodoDataSource {
  async listTodo(): Promise<Todo[]> {
    const route = "/todos";
    const response = await fetch(BASE_URL + route);
    return response.json();
  }
}
