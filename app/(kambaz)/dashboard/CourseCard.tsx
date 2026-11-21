"use client";

import Link from "next/link";
import Image from "next/image";
import type { Course } from "../store/courseStore";

export default function CourseCard({
  course,
  enrolled,
  onEdit,
  onDelete,
  onToggleEnrollment,
}: {
  course: Course;
  // null when nobody is signed in, which hides the Enroll/Unenroll button.
  enrolled: boolean | null;
  onEdit: () => void;
  onDelete: () => void;
  onToggleEnrollment: () => void;
}) {
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={course.image || "/images/reactjs.jpg"}
          width={300}
          height={160}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {course.description}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Go
            </button>
            <button
              type="button"
              id="wd-edit-course-click"
              className="ms-auto rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                onEdit();
              }}
            >
              Edit
            </button>
            <button
              type="button"
              id="wd-delete-course-click"
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
              onClick={(e) => {
                e.preventDefault();
                onDelete();
              }}
            >
              Delete
            </button>
            {enrolled !== null && (
              <button
                type="button"
                id="wd-enrollment-click"
                className={`rounded px-3 py-1.5 text-sm font-medium text-white ${
                  enrolled ? "bg-red-600" : "bg-green-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onToggleEnrollment();
                }}
              >
                {enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
