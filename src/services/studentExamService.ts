import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentExamResponse } from "models/responses/studentexams/getAllStudentExamResponse";
import { GetExamResponse } from "models/responses/exams/getExamResponse";
import { AddStudentExamRequest } from "models/requests/studentexams/addStudentExamRequest";
import { AddStudentExamResponse } from "models/responses/studentexams/addStudentExamResponse";
import { UpdateStudentExamRequest } from "models/requests/studentexams/updateStudentExamRequest";
import { UpdateStudentExamResponse } from "models/responses/studentexams/updateStudentExamResponse";

class StudentExamService extends BaseService<
	GetAllStudentExamResponse,
	GetExamResponse,
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