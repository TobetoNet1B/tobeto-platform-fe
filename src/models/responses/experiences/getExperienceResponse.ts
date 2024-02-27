export interface GetExperienceResponse{
	companyName: string;
	position: string;
	sector: string;
	description: string;
	startDate: string;
	endDate: string;
	isContinueJob: boolean;
	studentId: string;
	city: City;
}


 interface City {
	cityName: string;
}
