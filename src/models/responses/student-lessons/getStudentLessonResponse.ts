export type GetStudentLessonResponse = StudentLesson[]

export interface StudentLesson {
  id: string
  studentId: string
  lessonId: string
  isLiked: boolean
  isWatched: boolean
}
