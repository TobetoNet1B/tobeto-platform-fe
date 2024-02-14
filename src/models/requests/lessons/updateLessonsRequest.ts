export interface UpdateLessonsRequest {
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