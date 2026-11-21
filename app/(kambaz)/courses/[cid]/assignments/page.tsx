"use client";

import "@/app/labs/lab2/tailwind/utilities.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown, FaPlus, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentItem from "./AssignmentItem";
import * as client from "../../client";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  // The server filters by course; the store caches what it returned.
  const assignments = useAssignmentsStore((state) => state.assignments);
  const setAssignments = useAssignmentsStore((state) => state.setAssignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const pendingDelete = assignments.find((a) => a._id === pendingDeleteId);

  useEffect(() => {
    const load = async () => {
      setAssignments(await client.findAssignmentsForCourse(cid));
    };
    load();
  }, [cid, setAssignments]);

  const onDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    deleteAssignment(assignmentId);
  };

  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-neutral-300 pb-4">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <Link
            id="wd-add-assignment"
            href={`/courses/${cid}/assignments/new`}
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
          >
            <FaPlus /> Assignment
          </Link>
          <button
            type="button"
            className="rounded border px-2 py-1.5 text-sm"
            aria-label="More options"
          >
            <IoEllipsisVertical />
          </button>
        </div>
      </div>
      <div className="border border-neutral-300">
        <h3
          id="wd-assignments-title"
          className="m-0 flex items-center justify-between bg-neutral-200 p-3 text-lg"
        >
          <span className="flex items-center gap-2 font-semibold">
            <BsGripVertical className="text-2xl" />
            <FaCaretDown />
            ASSIGNMENTS
          </span>
          <span className="flex items-center gap-3">
            <span className="rounded-full border border-neutral-500 px-3 py-0.5 text-sm font-normal">
              40% of Total
            </span>
            <FaPlus className="text-base" />
            <IoEllipsisVertical className="text-xl" />
          </span>
        </h3>
        <ul id="wd-assignment-list" className="m-0 list-none p-0">
          {assignments.map((assignment) => (
            <AssignmentItem
              key={assignment._id}
              cid={cid}
              assignment={assignment}
              onDelete={() => setPendingDeleteId(assignment._id)}
            />
          ))}
        {/* <AssignmentItem
          cid={cid}
          aid="123"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="124"
          title="A2 - CSS + TAILWIND"
          details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="125"
          title="A3 - JAVASCRIPT + REACT"
          details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="126"
          title="A4 - BREAK DANCING"
          details="Multiple Modules | Not available until May 27 at 12:00am | Due June 3 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="ai-a"
          title="A9 - Sample assignment"
          details="Multiple Modules | Not available until June 3 at 12:00am | Due June 10 at 11:59pm | 100 pts"
        /> */}
        </ul>
      </div>
      {pendingDelete && (
        <div
          id="wd-delete-assignment-dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
            <div className="border-b border-neutral-200 px-4 py-3">
              <h3 className="m-0 text-xl font-normal">Delete Assignment</h3>
            </div>
            <p className="m-0 px-4 py-3">
              Are you sure you want to remove <b>{pendingDelete.title}</b>?
            </p>
            <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
              <button
                type="button"
                id="wd-delete-assignment-no"
                className="cursor-pointer rounded border-0 bg-neutral-300 px-3 py-1.5 text-sm"
                onClick={() => setPendingDeleteId(null)}
              >
                No
              </button>
              <button
                type="button"
                id="wd-delete-assignment-yes"
                className="cursor-pointer rounded border-0 bg-red-600 px-3 py-1.5 text-sm text-white"
                onClick={async () => {
                  await onDeleteAssignment(pendingDelete._id);
                  setPendingDeleteId(null);
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
