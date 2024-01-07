import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentModuleResponse } from "models/responses/studentModules/getAllStudentModuleResponse";
import { GetStudentModuleResponse } from "models/responses/studentModules/getStudentModuleResponse";
import { AddStudentModuleRequest } from "models/requests/studentModules/addStudentModuleRequest";
import { AddStudentModuleResponse } from "models/responses/studentModules/addStudentModuleResponse";
import { UpdateStudentModuleRequest } from "models/requests/studentModules/updateStudentModuleRequest";
import { UpdateStudentModuleResponse } from "models/responses/studentModules/updateStudentModuleResponse";

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