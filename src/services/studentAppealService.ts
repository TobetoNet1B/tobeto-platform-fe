import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentAppealResponse } from "models/responses/student-appeals/getAllStudentAppealResponse";
import { GetStudentAppealResponse } from "models/responses/student-appeals/getStudentAppealResponse";
import { AddStudentAppealRequest } from "models/requests/student-appeals/addStudentAppealRequest";
import { AddStudentAppealResponse } from "models/responses/student-appeals/addStudentAppealResponse";
import { UpdateStudentAppealRequest } from "models/requests/student-appeals/updateStudentAppealRequest";
import { UpdateStudentAppealResponse } from "models/responses/student-appeals/updateStudentAppealResponse";

class StudentAppealService extends BaseService<
	GetAllStudentAppealResponse,
	GetStudentAppealResponse,
	AddStudentAppealRequest,
	AddStudentAppealResponse,
	UpdateStudentAppealRequest,
	UpdateStudentAppealResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "StudentAppeals";
	}

	getByFilter() {}
}

export default new StudentAppealService();