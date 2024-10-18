import { Todo } from "../../../domain/entities/Todo";
import TodoItem from "../todoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
  handleOnChangeTodo(todoId: number): void;
}

function TodoList({ todos, handleOnChangeTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleOnChangeTodo={handleOnChangeTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
