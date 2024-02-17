export interface GetStudentClassroomResponse{
    classroom: Classroom;
	student: Student;
	moduleSets: ModuleSet[];
}

export interface Classroom {
	classroomId: string;
}

export interface Student {
	id: string;
}

export interface ModuleSet {
	id: string;
	name: string;
	imgUrl: string;
	companyName: string;
	classroomStartDate: string;
}