import { useEffect, useState } from "react";
import useUseCases from "../useUseCases";
import { Todo } from "../../../domain/entities/Todo";

function useListTodoUi(): {
  todos: Todo[];
  handleOnChangeTodo: (todoId: number) => void;
} {
  const [todos, setTodos] = useState<Todo[]>([]);

  const { listTodo } = useUseCases();

  useEffect(() => {
    const listTodoUI = async () => {
      const newTodos: Todo[] = await listTodo.execute();
      setTodos(newTodos);
    };

    listTodoUI();
  }, [listTodo]);

  const handleOnChangeTodo = (todoId: number) => {
    console.log(`changed todo ${todoId}`);
  };

  return { todos, handleOnChangeTodo };
}

export default useListTodoUi;
