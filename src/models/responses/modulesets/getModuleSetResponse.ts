export interface GetModuleSetResponse {
	id: string;
	name: string;
	startDate: string;
	endDate: string;
	estimatedTime: number;
	imgUrl: string;
	companyId: string;
	company: Company;
	moduleType: ModuleType;
	courseModules: CourseModule[];
	studentModules: StudentModule[];
	classroomModules: ClassroomModule[];
	moduleSetCategorys: ModuleSetCategory[];
}
export interface Company {
	name: string;
}
export interface ModuleType {
	name: string;
}
export interface Lesson {
	id: string;
	name: string;
	description: string;
	lessonUrl: string;
	imgUrl: string;
	lessonType: string;
	duration: number;
}
export interface CourseModule {
	name: string;
	lessons: Lesson[];
}
export interface StudentModule {
	studentId: string;
	timeSpent: number;
	isLiked: boolean;
	isFav: boolean;
}
export interface ModuleSetCategory {
	name: string;
}
export interface ClassroomModule {
	classroomStartDate: string;
	classroomEndDate: string;
}
