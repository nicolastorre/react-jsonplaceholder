import { Todo } from "../../../domain/entities/Todo";

interface TodoItemProps {
  todo: Todo;
  handleOnChangeTodo(todoId: number): void;
}

function TodoItem({ todo, handleOnChangeTodo }: TodoItemProps) {
  return (
    <li>
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
}

export default TodoItem;
