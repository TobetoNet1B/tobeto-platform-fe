import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentResponse } from "models/responses/students/getAllStudentResponse";
import { GetStudentResponse } from "models/responses/students/getStudentResponse";
import { AddStudentRequest } from "models/requests/students/addStudentRequest";
import { AddStudentResponse } from "models/responses/students/addStudentResponse";
import { UpdateStudentRequest } from "models/requests/students/updateStudentRequest";
import { UpdateStudentResponse } from "models/responses/students/updateStudentResponse";

class StudentService extends BaseService<
	GetAllStudentResponse,
	GetStudentResponse,
	AddStudentRequest,
	AddStudentResponse,
	UpdateStudentRequest,
	UpdateStudentResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Students";
	}

	getByFilter() {}


}

export default new StudentService();