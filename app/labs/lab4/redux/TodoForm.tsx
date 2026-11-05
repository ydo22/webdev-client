import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTitle, updateTodo } from "./todosReducer";
import type { RootState } from "./store";

export default function TodoForm() {
  const { title, editingId } = useSelector(
    (state: RootState) => state.todosReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={() => {
          if (editingId) {
            dispatch(updateTodo({ id: editingId, title }));
          } else {
            dispatch(addTodo(title));
          }
        }}
      >
        {editingId ? "Update" : "Add"}
      </button>
    </div>
  );
}
