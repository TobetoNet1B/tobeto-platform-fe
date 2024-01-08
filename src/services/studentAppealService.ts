import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentAppealResponse } from "models/responses/studentappeals/getAllStudentAppealResponse";
import { GetStudentAppealResponse } from "models/responses/studentappeals/getStudentAppealResponse";
import { AddStudentAppealRequest } from "models/requests/studentappeals/addStudentAppealRequest";
import { AddStudentAppealResponse } from "models/responses/studentappeals/addStudentAppealResponse";
import { UpdateStudentAppealRequest } from "models/requests/studentappeals/updateStudentAppealRequest";
import { UpdateStudentAppealResponse } from "models/responses/studentappeals/updateStudentAppealResponse";

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