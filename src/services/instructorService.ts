import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllInstructorResponse } from "models/responses/instructors/getAllInstructorResponse";
import { GetInstructorResponse } from "models/responses/instructors/getInstructorDetailResponse";
import { AddInstructorRequest } from "models/requests/instructors/addInstructorRequest";
import { AddInstructorResponse } from "models/responses/instructors/addInstructorResponse";
import { UpdateInstructorRequest } from "models/requests/instructors/updateInstructorRequest";
import { UpdateInstructorResponse } from "models/responses/instructors/updateInstructorResponse";

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