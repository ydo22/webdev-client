import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ReduxTodo = { id: string; title: string };

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: "1", title: "Learn HTML" },
      { id: "2", title: "Learn CSS" },
      { id: "3", title: "Learn JavaScript" },
    ] as ReduxTodo[],
    title: "Learn Mongo",
    editingId: null as string | null,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: crypto.randomUUID(), title: action.payload });
      state.title = "Learn Mongo";
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<ReduxTodo>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) todo.title = action.payload.title;
      state.title = "Learn Mongo";
      state.editingId = null;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    startEditing: (state, action: PayloadAction<ReduxTodo>) => {
      state.title = action.payload.title;
      state.editingId = action.payload.id;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTitle, startEditing } =
  todosSlice.actions;
export default todosSlice.reducer;