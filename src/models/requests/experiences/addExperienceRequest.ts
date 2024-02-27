export interface AddExperienceRequest {
  companyName: string;
	position: string;
	sector: string;
	description:string;
	cityId: string;
	startDate?: Date;
	endDate?: Date;
	isContinueJob?: boolean;
	studentId: string;
}