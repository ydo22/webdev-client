"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as client from "../client";
import type { Course } from "../../store/courseStore";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : (params.cid ?? "");
  const [course, setCourse] = useState<Course | undefined>();
  const [showCourseNav, setShowCourseNav] = useState(true);
  const { currentUser } = useAccountContext();
  const router = useRouter();

  // The store may be empty after a refresh, so ask the server for the course.
  // Signed-out visitors can browse any course (like the Dashboard); a signed-in
  // user who isn't enrolled in this course is sent back to the Dashboard.
  useEffect(() => {
    const load = async () => {
      try {
        const courses = currentUser
          ? await client.findMyCourses()
          : await client.fetchAllCourses();
        const found = courses.find((c) => c._id === cid);
        if (currentUser && !found) {
          router.push("/dashboard");
          return;
        }
        setCourse(found);
      } catch {
        setCourse(undefined);
      }
    };
    load();
  }, [cid, currentUser, router]);

  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          title="Toggle course navigation"
          onClick={() => setShowCourseNav(!showCourseNav)}
        />
        <span>{course?._id} </span>
        <Breadcrumb course={course} />
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav && (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
