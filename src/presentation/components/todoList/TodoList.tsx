import { Todo } from "../../../domain/entities/Todo";

interface TodoListProps {
  todos: Todo[];
  handleOnChangeTodo(todoId: number): void;
}

function TodoList({ todos, handleOnChangeTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleOnChangeTodo(todo.id)}
              />
              {todo.title}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
