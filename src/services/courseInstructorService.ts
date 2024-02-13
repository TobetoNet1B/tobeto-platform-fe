import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCourseInstructorResponse } from "models/responses/course-instructors/getAllCourseInstructorResponse";
import { GetCourseInstructorResponse } from "models/responses/course-instructors/getCourseInstructorResponse";
import { AddCourseInstructorResponse } from "models/responses/course-instructors/addCourseInstructorResponse";
import { AddCourseInstructorsRequest } from "models/requests/course-instructors/addCourseInstructorsRequest";
import { UpdateCourseInstructorsRequest } from "models/requests/course-instructors/updateCourseInstructorsRequest";
import { UpdateCourseInstructorResponse } from "models/responses/course-instructors/updateCourseInstructorResponse";



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