import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { getAllForeignLanguageResponse } from "models/responses/ForeignLanguages/getAllForeignLanguageResponse";
import { GetForeignLanguageResponse } from "models/responses/ForeignLanguages/getForeignLanguageResponse";
import { AddForeignLanguageRequest } from "models/requests/ForeignLanguages/addForeignLanguageRequest";
import { AddForeignLanguageResponse } from "models/responses/ForeignLanguages/addForeignLanguageResponse";
import { UpdateForeignLanguageRequest } from "models/requests/ForeignLanguages/updateForeignLanguageRequest";
import { UpdateForeignLanguageResponse } from "models/responses/ForeignLanguages/updateForeignLanguageResponse";

class ForeignLanguageService extends BaseService<
	getAllForeignLanguageResponse,
	GetForeignLanguageResponse,
	AddForeignLanguageRequest,
	AddForeignLanguageResponse,
	UpdateForeignLanguageRequest,
	UpdateForeignLanguageResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "ForeignLanguages";
	}

	getByFilter() {}
}

export default new ForeignLanguageService();