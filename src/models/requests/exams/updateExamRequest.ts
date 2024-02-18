export interface UpdateExamRequest {
  id: string;
	name: string;
	description: string;
	time: number;
	questionCount: number;
	questionType: string;
}