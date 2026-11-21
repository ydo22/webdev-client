import axios from "axios";
import type { Course } from "../store/courseStore";
import type { CourseModule } from "../store/modulesStore";
import type { Assignment } from "../store/assignmentsStore";
import type { User } from "../account/AccountContext";

// Calls that depend on who is signed in must send the session cookie.
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

// --- Courses (§5.4.5) ---
export const fetchAllCourses = async (): Promise<Course[]> => {
  const { data } = await axios.get(COURSES_API);
  return data;
};
export const findMyCourses = async (): Promise<Course[]> => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};
export const createCourse = async (course: unknown): Promise<Course> => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};
export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}`);
  return data;
};
export const updateCourse = async (course: { _id: string }): Promise<Course> => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

// --- Modules (§5.4.6) ---
export const findModulesForCourse = async (courseId: string): Promise<CourseModule[]> => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const createModuleForCourse = async (
  courseId: string,
  module: unknown,
): Promise<CourseModule> => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};
export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};
export const updateModule = async (module: { _id: string }): Promise<CourseModule> => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};

// --- Assignments (§5.4.7) ---
export const findAssignmentsForCourse = async (courseId: string): Promise<Assignment[]> => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
};
export const createAssignmentForCourse = async (
  courseId: string,
  assignment: unknown,
): Promise<Assignment> => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return data;
};
export const updateAssignment = async (assignment: { _id: string }): Promise<Assignment> => {
  const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};
export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};

// --- Enrollments (§5.4.8). userId "current" means the signed-in user. ---
export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
  return data;
};
export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
  return data;
};
export const findUsersForCourse = async (courseId: string): Promise<User[]> => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/users`);
  return data;
};
