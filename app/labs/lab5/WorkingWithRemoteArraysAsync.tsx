"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

type EditableTodo = client.Todo & { editing?: boolean };

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<EditableTodo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Old GET routes: the server answers with the whole updated array.
  const removeTodo = async (todo: EditableTodo) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };
  // HTTP-method routes: the client patches its own copy of the array.
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: EditableTodo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message ?? error.message);
      }
    }
  };
  const editTodo = (todo: EditableTodo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: EditableTodo) => {
    // "editing" is screen-only state, so it isn't sent to the server.
    const saved: client.Todo = {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      description: todo.description,
    };
    try {
      await client.updateTodo(saved);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message ?? error.message);
      }
    }
  };

  // Load once on mount; state is set in the response callback.
  useEffect(() => {
    client.fetchTodos().then(setTodos);
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4 className="flex items-center gap-2">
        Todos
        <FaPlusCircle
          id="wd-create-todo"
          title="Create todo (GET)"
          className="cursor-pointer text-green-600"
          onClick={createNewTodo}
        />
        <FaPlusCircle
          id="wd-post-todo"
          title="Post todo (POST)"
          className="cursor-pointer text-blue-600"
          onClick={postNewTodo}
        />
      </h4>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 border-b border-neutral-200 py-2"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
            />
            {todo.editing ? (
              <input
                className="flex-1 rounded border border-neutral-300 px-2 py-1"
                value={todo.title}
                autoFocus
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...todo, title: e.target.value } : t,
                    ),
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") updateTodo({ ...todo, editing: false });
                }}
              />
            ) : (
              <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
                {todo.title}
              </span>
            )}
            <FaPencilAlt
              title="Edit todo"
              className="cursor-pointer text-blue-600"
              onClick={() => editTodo(todo)}
            />
            <TiDelete
              id="wd-delete-todo"
              title="Delete todo (DELETE)"
              className="cursor-pointer text-2xl text-red-600"
              onClick={() => deleteTodo(todo)}
            />
            <FaTrash
              id="wd-remove-todo"
              title="Remove todo (GET)"
              className="cursor-pointer text-red-600"
              onClick={() => removeTodo(todo)}
            />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
