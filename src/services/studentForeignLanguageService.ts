import { UpdateStudentForeignLanguageResponse } from './../models/responses/studentforeignlanguages/updateStudentForeignLanguageResponse';
import { UpdateStudentForeignLanguageRequest } from './../models/requests/studentforeignlanguages/updateStudentForeignLanguageRequest';
import { AddStudentForeignLanguageResponse } from './../models/responses/studentforeignlanguages/addStudentForeignLanguageResponse';
import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentForeignLanguageResponse } from "models/responses/studentforeignlanguages/getAllStudentForeignLanguageResponse";
import { GetStudentForeignLanguageResponse } from "models/responses/studentforeignlanguages/getStudentForeignLanguageResponse";
import { AddStudentForeignLanguageRequest } from "models/requests/studentforeignlanguages/addStudentForeignLanguageRequest";

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