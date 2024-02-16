// export interface GetStudentModuleResponse {
//     id: string;
//     studentId: string;
//     moduleSetId: string;
//     timeSpent: number;
// }
export interface GetStudentModuleResponse {
	id: string;
    moduleSets:ModuleSet[]
    timeSpent: number;
}

export interface ModuleSet {
	id: string;
	name: string;
	imgUrl: string;
	companyName: string;
	startDate: string;
}
