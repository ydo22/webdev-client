"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

type Assignment = {
  id?: number;
  title?: string;
  description?: string;
  due?: string;
  completed?: boolean;
  score?: number;
};

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<Assignment>({});
  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };
  // Load once on mount; state is set in the response callback.
  useEffect(() => {
    client.fetchAssignment().then(setAssignment);
  }, []);
  return (
    <div id="wd-working-with-objects-async">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <input
          id="wd-assignment-title-async"
          className="rounded border border-neutral-300 px-2 py-1"
          value={assignment.title ?? ""}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            className="me-1"
            checked={assignment.completed ?? false}
            readOnly
          />
          Completed
        </label>
        <button
          type="button"
          id="wd-update-assignment-title-async"
          className="cursor-pointer rounded border-0 bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={() => updateTitle(assignment.title ?? "")}
        >
          Update Title
        </button>
      </div>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
