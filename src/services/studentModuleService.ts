import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentModuleResponse } from "models/responses/student-modules/getAllStudentModuleResponse";
import { GetStudentModuleResponse } from "models/responses/student-modules/getStudentModuleResponse";
import { AddStudentModuleRequest } from "models/requests/student-modules/addStudentModuleRequest";
import { AddStudentModuleResponse } from "models/responses/student-modules/addStudentModuleResponse";
import { UpdateStudentModuleRequest } from "models/requests/student-modules/updateStudentModuleRequest";
import { UpdateStudentModuleResponse } from "models/responses/student-modules/updateStudentModuleResponse";

class StudentModuleService extends BaseService<
	GetAllStudentModuleResponse,
	GetStudentModuleResponse,
	AddStudentModuleRequest,
	AddStudentModuleResponse,
	UpdateStudentModuleRequest,
	UpdateStudentModuleResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "StudentModules";
	}

	getByFilter() {}
}

export default new StudentModuleService();