import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentExamResponse } from "models/responses/student-exams/getAllStudentExamResponse";
import { GetStudentExamResponse } from "models/responses/student-exams/getStudentExamResponse";
import { AddStudentExamRequest } from "models/requests/student-exams/addStudentExamRequest";
import { AddStudentExamResponse } from "models/responses/student-exams/addStudentExamResponse";
import { UpdateStudentExamRequest } from "models/requests/student-exams/updateStudentExamRequest";
import { UpdateStudentExamResponse } from "models/responses/student-exams/updateStudentExamResponse";

class StudentExamService extends BaseService<
	GetAllStudentExamResponse,
	GetStudentExamResponse,
	AddStudentExamRequest,
	AddStudentExamResponse,
	UpdateStudentExamRequest,
	UpdateStudentExamResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "StudentExams";
	}

	getByFilter() {}
}

export default new StudentExamService();