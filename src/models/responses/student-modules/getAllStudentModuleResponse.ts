export interface GetAllStudentModuleResponse {
  items: StudentModuleSet[];
}
export interface StudentModuleSet {
  id: string;
  studentId: string;
	moduleSetId: string;
	timeSpent: number;
  isLiked: boolean;
	isFav: boolean;
}