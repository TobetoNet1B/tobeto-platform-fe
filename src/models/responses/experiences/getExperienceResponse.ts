export interface GetExperienceResponse{
	id:string
    companyName: string;
	position: string;
	sector: string;
	startDate: string;
	endDate: string;
	isContinueJob: boolean;
	studentId: string;
	city: City;
}


export interface City {
	cityName: string;
}
