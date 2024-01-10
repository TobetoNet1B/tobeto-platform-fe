import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCourseResponse } from "models/responses/courses/getAllCourseResponse";
import { GetCourseResponse } from "models/responses/courses/getCourseResponse";
import { AddCourseRequest } from "models/requests/courses/addCourseRequest";
import { AddCourseResponse } from "models/responses/courses/addCourseResponse";
import { UpdateCourseRequest } from "models/requests/courses/updateCourseRequest";
import { UpdateCourseResponse } from "models/responses/courses/updateCourseResponse";
class CourseService extends BaseService<
	GetAllCourseResponse,
	GetCourseResponse,
	AddCourseRequest,
	AddCourseResponse,
	UpdateCourseRequest,
	UpdateCourseResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Courses";
	}

	getByFilter() {}
}

export default new CourseService();