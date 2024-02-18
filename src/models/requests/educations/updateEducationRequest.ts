export interface UpdateEducationRequest {
  id: string;
	university: string;
	department: string;
	graduation: string;
	startDate: string;
	endDate: string;
	isContinueUniversity: boolean;
	studentId: string;
}