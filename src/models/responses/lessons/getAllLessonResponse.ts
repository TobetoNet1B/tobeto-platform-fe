export interface GetAllLessonResponse {
  items: Lesson[];
}
export interface Lesson {
  id: string;
  name: string;
  description: string;
  lessonUrl: string;
  imgUrl: string;
  lessonType: string;
  duration: number;
  courseId: string;
  speakerId: string;
}