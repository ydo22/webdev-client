
import { createContext, useContext, useState, type ReactNode } from "react";

type Todo = {
  id: number;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1);

  function addTodo(title: string) {
    if (!title.trim()) return;

    setTodos([...todos, { id: nextId, title: title.trim() }]);
    setNextId(nextId + 1);
  }

  function updateTodo(id: number, title: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);

  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }

  return value;
}
