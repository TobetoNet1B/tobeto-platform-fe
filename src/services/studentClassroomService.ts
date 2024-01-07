import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentClassroomResponse } from "models/responses/studentclassrooms/getAllStudentClassroomResponse";
import { GetStudentClassroomResponse } from "models/responses/studentclassrooms/getStudentClassroomResponse";
import { AddStudentClassroomRequest } from "models/requests/studentclassrooms/addStudentClassroomRequest";
import { AddStudentClassroomResponse } from "models/responses/studentclassrooms/addStudentClassroomResponse";
import { UpdateStudentClassroomRequest } from "models/requests/studentclassrooms/updateStudentClassroomRequest";
import { UpdateClassroomResponse } from "models/responses/classrooms/updateClassroomResponse";

class StudentClassroomService extends BaseService<
	GetAllStudentClassroomResponse,
	GetStudentClassroomResponse,
	AddStudentClassroomRequest,
	AddStudentClassroomResponse,
	UpdateStudentClassroomRequest,
	UpdateClassroomResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "StudentClassrooms";
	}

	getByFilter() {}
}

export default new StudentClassroomService();