"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore } from "../../store/courseStore";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : (params.cid ?? "");
  const courses = useCoursesStore((state) => state.courses);
  const course = courses.find((c) => c._id === cid);
  const [showCourseNav, setShowCourseNav] = useState(true);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const router = useRouter();
  const enrolled =
    currentUser !== null &&
    enrollments.some((e) => e.user === currentUser._id && e.course === cid);

  useEffect(() => {
    if (!enrolled) router.push("/dashboard");
  }, [enrolled, router]);

  if (!enrolled) return null;

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
