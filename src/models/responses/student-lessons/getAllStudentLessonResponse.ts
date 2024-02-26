export interface GetAllStudentLessonResponse {
  items: StudentLesson[];
}
export interface StudentLesson {
  id: string;
  studentId: string;
  lessonId: string;
  isLiked: boolean;
  isWatched: boolean;
}