export interface UpdateStudentLessonRequest{
  id: string;
  studentId: string;
	lessonId: string;
	isLiked: boolean;
	isWatched: boolean;
}