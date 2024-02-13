import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCourseModuleResponse } from "models/responses/course-modules/getAllCourseModuleResponse";
import { GetCourseModuleResponse } from "models/responses/course-modules/getCourseModuleResponse";
import { AddCourseModuleRequest } from "models/requests/course-modules/addCourseModuleRequest";
import { AddCourseModuleResponse } from "models/responses/course-modules/addCourseModuleResponse";
import { UpdateCourseModuleRequest } from "models/requests/course-modules/updateCourseModuleRequest";
import { UpdateCourseModuleResponse } from "models/responses/course-modules/updateCourseModuleResponse";


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