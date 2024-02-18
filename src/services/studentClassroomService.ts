import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentClassroomResponse } from "models/responses/student-classrooms/getAllStudentClassroomResponse";
import { GetStudentClassroomResponse } from "models/responses/student-classrooms/getStudentClassroomResponse";
import { AddStudentClassroomRequest } from "models/requests/student-classrooms/addStudentClassroomRequest";
import { AddStudentClassroomResponse } from "models/responses/student-classrooms/addStudentClassroomResponse";
import { UpdateStudentClassroomRequest } from "models/requests/student-classrooms/updateStudentClassroomRequest";
import { UpdateStudentClassroomResponse } from "models/responses/student-classrooms/updateStudentClassroomResponse";

class StudentClassroomService extends BaseService<
	GetAllStudentClassroomResponse,
	GetStudentClassroomResponse,
	AddStudentClassroomRequest,
	AddStudentClassroomResponse,
	UpdateStudentClassroomRequest,
	UpdateStudentClassroomResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "StudentClassrooms";
	}

	getByFilter() {}
}

export default new StudentClassroomService();