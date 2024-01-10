import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCourseModuleResponse } from "models/responses/coursemodules/getAllCourseModuleResponse";
import { GetCourseModuleResponse } from "models/responses/coursemodules/getCourseModuleResponse";
import { AddCourseModuleRequest } from "models/requests/coursemodules/addCourseModuleRequest";
import { AddCourseModuleResponse } from "models/responses/coursemodules/addCourseModuleResponse";
import { UpdateCourseModuleRequest } from "models/requests/coursemodules/updateCourseModuleRequest";
import { UpdateCourseModuleResponse } from "models/responses/coursemodules/updateCourseModuleResponse";


class CourseModuleService extends BaseService<
	GetAllCourseModuleResponse,
	GetCourseModuleResponse,
	AddCourseModuleRequest,
	AddCourseModuleResponse,
	UpdateCourseModuleRequest,
	UpdateCourseModuleResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "CourseModules";
	}

	getByFilter() {}
}

export default new CourseModuleService();