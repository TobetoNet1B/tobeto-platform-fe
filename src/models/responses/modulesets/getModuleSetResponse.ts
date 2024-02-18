export interface GetModuleSetResponse {
	id: string;
	name: string;
	startDate: string;
	endDate: string;
	estimatedTime: number;
	imgUrl: string;
	companyId: string;
	company: Company;
	courseModules: CourseModule[];
	studentModules: StudentModule[];
	moduleSetCategorys: ModuleSetCategory[];
}
export interface Company {
	name: string;
}
export interface Lesson {
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
}
export interface ModuleSetCategory {
	name: string;
}

