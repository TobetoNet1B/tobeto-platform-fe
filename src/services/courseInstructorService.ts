import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCourseInstructorResponse } from "models/responses/courseinstructors/getAllCourseInstructorResponse";
import { GetCourseInstructorResponse } from "models/responses/courseinstructors/getCourseInstructorResponse";
import { AddCourseInstructorResponse } from "models/responses/courseinstructors/addCourseInstructorResponse";
import { AddCourseInstructorsRequest } from "models/requests/courseinstructors/addCourseInstructorsRequest";
import { UpdateCourseInstructorsRequest } from "models/requests/courseinstructors/updateCourseInstructorsRequest";
import { UpdateCourseInstructorResponse } from "models/responses/courseinstructors/updateCourseInstructorResponse";



class CourseInstructorService extends BaseService<
	GetAllCourseInstructorResponse,
	GetCourseInstructorResponse,
	AddCourseInstructorsRequest,
	AddCourseInstructorResponse,
	UpdateCourseInstructorsRequest,
	UpdateCourseInstructorResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "CourseCategoriesInstructors";
    }
	getByFilter() {}
}

export default new CourseInstructorService();