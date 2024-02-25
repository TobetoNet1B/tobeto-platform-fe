export interface AddEducationRequest {
	university: string;
	  department: string;
	  graduation: string;
	  startDate?:Date;
	  endDate?: Date; 
	  isContinueUniversity?: boolean;
	  studentId: string;
  }
  