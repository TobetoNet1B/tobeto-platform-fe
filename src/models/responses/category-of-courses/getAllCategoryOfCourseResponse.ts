export interface GetAllCategoryOfCourseResponse{
  items: CategoryOfCourse[];
}
export interface CategoryOfCourse{
  id: string;
	name: string;
	isActive: boolean;
}