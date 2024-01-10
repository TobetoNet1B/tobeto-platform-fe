import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllExperienceResponse } from "models/responses/experiences/getAllExperienceResponse";
import { GetExperienceResponse } from "models/responses/experiences/getExperienceResponse";
import { AddExperienceRequest } from "models/requests/experiences/addExperienceRequest";
import { AddExperienceResponse } from "models/responses/experiences/addExperienceResponse";
import { updateExperienceRequest } from "models/requests/experiences/updateExperienceRequest";
import { UpdateExperienceResponse } from "models/responses/experiences/updateExperienceResponse";

class ExperienceService extends BaseService<
	GetAllExperienceResponse,
	GetExperienceResponse,
	AddExperienceRequest,
	AddExperienceResponse,
	updateExperienceRequest,
	UpdateExperienceResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Experiences";
	}

	getByFilter() {}
}

export default new ExperienceService();