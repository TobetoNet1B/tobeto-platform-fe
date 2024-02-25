import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { AddStudentLessonRequest } from "models/requests/student-lessons/addStudentLessonRequest";
import { AddStudentLessonResponse } from "models/responses/student-lessons/addStudentLessonResponse";
import { UpdateStudentLessonRequest } from "models/requests/student-lessons/updateStudentLessonRequest";
import { UpdateStudentLessonResponse } from "models/responses/student-lessons/updateStudentLessonResponse";
import { GetAllStudentLessonResponse } from "models/responses/student-lessons/getAllStudentLessonResponse";
import { GetStudentLessonResponse } from "models/responses/student-lessons/getStudentLessonResponse";

class StudentLessonService extends BaseService<
GetAllStudentLessonResponse,
GetStudentLessonResponse,
AddStudentLessonRequest,
AddStudentLessonResponse,
UpdateStudentLessonRequest,
UpdateStudentLessonResponse
>{
  constructor() {
		super();
		this.apiUrl = BASE_API_URL + "StudentLessons";
	}

	getByFilter() {}
}
export default new StudentLessonService();