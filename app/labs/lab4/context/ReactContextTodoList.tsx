
"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } =
    useTodosContext();

  const [newTodo, setNewTodo] = useState("");

  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>

      {/* Add Todo */}
      <div className="mb-3">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a todo"
          className="rounded border px-3 py-1"
          id="wd-context-todo-input"
        />

        <button
          type="button"
          onClick={() => {
            addTodo(newTodo);
            setNewTodo("");
          }}
          className="ms-2 rounded bg-green-600 px-3 py-1.5 text-sm text-white"
          id="wd-context-todo-add"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            <input
              type="text"
              value={todo.title}
              onChange={(e) =>
                updateTodo(todo.id, e.target.value)
              }
              className="rounded border px-2 py-1"
              id={`wd-context-todo-title-${todo.id}`}
            />

            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="ms-2 rounded bg-red-600 px-3 py-1.5 text-sm text-white"
              id={`wd-context-todo-delete-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
