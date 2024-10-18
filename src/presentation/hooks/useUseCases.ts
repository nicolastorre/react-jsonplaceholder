import { useMemo } from "react";
import { TodoRepositoryImpl } from "../../data/repositories/TodoRepositoryImpl";
import { TodoDataSource } from "../../data/dataSources/TodoDataSource";
import { ListTodo } from "../../domain/usecases/todo/ListTodo";
export interface Container {
  listTodo: ListTodo;
}

function useUseCases(): Container {
  const todoDataSource = useMemo(() => new TodoDataSource(), []);
  const todoRepositoryImpl = useMemo(
    () => new TodoRepositoryImpl(todoDataSource),
    [todoDataSource]
  );
  const listTodo = useMemo(
    () => new ListTodo(todoRepositoryImpl),
    [todoRepositoryImpl]
  );
  return { listTodo };
}

export default useUseCases;
