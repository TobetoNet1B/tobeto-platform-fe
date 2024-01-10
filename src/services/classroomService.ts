import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllClassroomResponse } from "models/responses/classrooms/getAllClassroomResponse";
import { GetClassroomResponse } from "models/responses/classrooms/getClassroomResponse";
import { AddClassroomRequest } from "models/requests/classrooms/addClassroomRequest";
import { AddClassroomResponse } from "models/responses/classrooms/addClassroomResponse";
import { UpdateClassroomRequest } from "models/requests/classrooms/updateClassroomRequest";
import { UpdateClassroomResponse } from "models/responses/classrooms/updateClassroomResponse";


class ClassroomService extends BaseService<
	GetAllClassroomResponse,
	GetClassroomResponse,
	AddClassroomRequest,
	AddClassroomResponse,
	UpdateClassroomRequest,
	UpdateClassroomResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Classrooms";
	}

	getByFilter() {}
}

export default new ClassroomService();