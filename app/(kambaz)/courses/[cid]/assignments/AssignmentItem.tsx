import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";
import GreenCheckmark from "../modules/GreenCheckmark";
import type { Assignment } from "../../../store/assignmentsStore";

// "2024-05-13" -> "May 13", read as a local date so it doesn't shift a day.
function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function AssignmentItem({
  cid,
  assignment,
  onDelete,
}: {
  cid: string;
  assignment: Assignment;
  onDelete: () => void;
}) {
  return (
    <li className="wd-assignment-list-item flex items-center gap-3 border-b border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <BsGripVertical className="shrink-0 text-2xl text-neutral-700" />
      <MdEditNote className="shrink-0 text-3xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${assignment._id}`}
          className="wd-assignment-link text-lg font-semibold text-neutral-900 no-underline"
        >
          {assignment.title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">
          <span className="text-red-700">Multiple Modules</span>
          {assignment.available && (
            <>
              {" | "}
              <b>Not available until</b> {formatDate(assignment.available)} at
              12:00am
            </>
          )}
          {assignment.due && (
            <>
              {" | "}
              <b>Due</b> {formatDate(assignment.due)} at 11:59pm
            </>
          )}
          {" | "}
          {assignment.points} pts
        </div>
      </div>
      <span className="flex shrink-0 items-center gap-3">
        <FaTrash
          className="cursor-pointer text-red-600"
          title="Delete assignment"
          onClick={onDelete}
        />
        <GreenCheckmark />
        <IoEllipsisVertical className="text-xl" />
      </span>
    </li>
  );
}
