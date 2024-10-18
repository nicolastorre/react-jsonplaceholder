import TodoList from "../../components/todoList/TodoList";
import useListTodoUi from "../../hooks/todo/useListTodoUI";

function TodosPage() {
  const { todos, handleOnChangeTodo } = useListTodoUi();

  return (
    <div>
      <h2>TODOS</h2>
      <div>
        <TodoList todos={todos} handleOnChangeTodo={handleOnChangeTodo} />
      </div>
    </div>
  );
}

export default TodosPage;
