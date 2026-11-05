import { useSelector } from "react-redux";
import type { RootState } from "./store";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <TodoForm />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
