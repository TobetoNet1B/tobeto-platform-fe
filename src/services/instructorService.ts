import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllInstructorResponse } from "models/responses/instructor/getAllInstructorResponse";
import { GetInstructorResponse } from "models/responses/instructor/getInstructorDetailResponse";
import { AddInstructorRequest } from "models/requests/instructor/addInstructorRequest";
import { AddInstructorResponse } from "models/responses/instructor/addInstructorResponse";
import { UpdateInstructorRequest } from "models/requests/instructor/updateInstructorRequest";
import { UpdateInstructorResponse } from "models/responses/instructor/updateInstructorResponse";

class InstructorService extends BaseService<
	GetAllInstructorResponse,
	GetInstructorResponse,
	AddInstructorRequest,
	AddInstructorResponse,
	UpdateInstructorRequest,
	UpdateInstructorResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Instructors";
	}

	getByFilter() {}
}

export default new InstructorService();