"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/courseStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  // Ids of the courses the signed-in user is enrolled in (from the server).
  const [myCourseIds, setMyCourseIds] = useState<string[]>([]);
  const [error, setError] = useState("");

  // Express is the source of truth: reload whenever the user or view changes.
  // Signed out, everyone sees every course; signed in, only enrolled courses
  // unless "Enrollments" toggles the full catalog.
  useEffect(() => {
    const load = async () => {
      try {
        if (!currentUser) {
          setMyCourseIds([]);
          setCourses(await client.fetchAllCourses());
          return;
        }
        const mine = await client.findMyCourses();
        setMyCourseIds(mine.map((c) => c._id));
        setCourses(showAllCourses ? await client.fetchAllCourses() : mine);
        setError("");
      } catch {
        setCourses([]);
        setError("Unable to load courses. Is the Node server running?");
      }
    };
    load();
  }, [currentUser, showAllCourses, setCourses]);

  const onAddCourse = async () => {
    if (!currentUser) {
      setError("Sign in to create a course.");
      return;
    }
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
    // The server enrolls the creator, so mirror that locally.
    setMyCourseIds([...myCourseIds, newCourse._id]);
  };
  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
    setMyCourseIds(myCourseIds.filter((id) => id !== courseId));
  };
  const onToggleEnrollment = async (courseId: string) => {
    if (myCourseIds.includes(courseId)) {
      await client.unenrollFromCourse("current", courseId);
      setMyCourseIds(myCourseIds.filter((id) => id !== courseId));
      // In the enrolled-only view the course disappears from the list.
      if (!showAllCourses) deleteCourse(courseId);
    } else {
      await client.enrollIntoCourse("current", courseId);
      setMyCourseIds([...myCourseIds, courseId]);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="flex items-center justify-between">
        Dashboard
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </h1>
      <hr />
      {error && (
        <p id="wd-dashboard-error" className="my-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      )}
      <h5 className="flex max-w-xl flex-wrap items-center gap-2">
        New Course
        {/* row-reverse keeps Add first in the markup but rightmost on screen */}
        <span className="ms-auto flex flex-row-reverse gap-2">
          <button
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-add-new-course-click"
            onClick={onAddCourse}
          >
            Add
          </button>
          <button
            type="button"
            className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
            id="wd-update-course-click"
            onClick={onUpdateCourse}
          >
            Update
          </button>
        </span>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-my-course-number"
      />
      <input
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-my-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            enrolled={currentUser ? myCourseIds.includes(c._id) : null}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            onToggleEnrollment={() => onToggleEnrollment(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
