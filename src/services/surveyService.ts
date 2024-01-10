import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllSurveyResponse } from "models/responses/surveys/getAllSurveyResponse";
import { GetSurveyResponse } from "models/responses/surveys/getSurveyResponse";
import { AddSurveyRequest } from "models/requests/surveys/addSurveyRequest";
import { AddSurveyResponse } from "models/responses/surveys/addSurveyResponse";
import { UpdateSurveyRequest } from "models/requests/surveys/updateSurveyRequest";
import { UpdateSurveyResponse } from "models/responses/surveys/updateSurveyResponse";

class SurveyService extends BaseService<
	GetAllSurveyResponse,
	GetSurveyResponse,
	AddSurveyRequest,
	AddSurveyResponse,
	UpdateSurveyRequest,
	UpdateSurveyResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Surveys";
	}

	getByFilter() {}
}

export default new SurveyService();