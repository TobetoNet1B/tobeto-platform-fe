export interface AddStudentModuleRequest{
  studentId: string;
	moduleSetId: string;
	timeSpent: number;
  isLiked: boolean;
	isFav: boolean;
}