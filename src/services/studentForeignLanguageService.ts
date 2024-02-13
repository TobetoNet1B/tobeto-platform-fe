import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { UpdateStudentForeignLanguageResponse } from './../models/responses/student-foreign-languages/updateStudentForeignLanguageResponse';
import { UpdateStudentForeignLanguageRequest } from './../models/requests/student-foreign-languages/updateStudentForeignLanguageRequest';
import { AddStudentForeignLanguageResponse } from './../models/responses/student-foreign-languages/addStudentForeignLanguageResponse';
import { GetAllStudentForeignLanguageResponse } from "models/responses/student-foreign-languages/getAllStudentForeignLanguageResponse";
import { GetStudentForeignLanguageResponse } from "models/responses/student-foreign-languages/getStudentForeignLanguageResponse";
import { AddStudentForeignLanguageRequest } from "models/requests/student-foreign-languages/addStudentForeignLanguageRequest";

class StudentForeignLanguageService extends BaseService<
	GetAllStudentForeignLanguageResponse,
	GetStudentForeignLanguageResponse,
	AddStudentForeignLanguageRequest,
	AddStudentForeignLanguageResponse,
	UpdateStudentForeignLanguageRequest,
	UpdateStudentForeignLanguageResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "StudentForeignLanguages";
	}

	getByFilter() {}
}

export default new StudentForeignLanguageService();