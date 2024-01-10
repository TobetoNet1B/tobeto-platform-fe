import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllEducationResponse } from "models/responses/educations/getAllEducationResponse";
import { GetEducationResponse } from "models/responses/educations/getEducationResponse";
import { AddEducationRequest } from "models/requests/educations/addEducationRequest";
import { AddEducationResponse } from "models/responses/educations/addEducationResponse";
import { UpdateEducationRequest } from "models/requests/educations/updateEducationRequest";
import { UpdateEducationResponse } from "models/responses/educations/updateEducationResponse";

class EducationService extends BaseService<
	GetAllEducationResponse,
	GetEducationResponse,
	AddEducationRequest,
	AddEducationResponse,
	UpdateEducationRequest,
	UpdateEducationResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Educations";
	}

	getByFilter() {}
}

export default new EducationService();