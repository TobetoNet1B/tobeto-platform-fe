export interface GetAllCourseResponse {
  items: Course[];
}
export interface Course {
  id: string;
  name: string;
}