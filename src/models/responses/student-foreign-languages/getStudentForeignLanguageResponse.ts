export interface GetStudentForeignLanguageResponse{
    id: string;
	studentId: string;
	foreignLanguage: ForeignLanguage;
	foreignLanguageLevel: ForeignLanguageLevel;
}

 interface ForeignLanguage {
	name: string;
}

 interface ForeignLanguageLevel {
	name: string;
}
