import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { getAllForeignLanguageResponse } from "models/responses/foreign-languages/getAllForeignLanguageResponse";
import { GetForeignLanguageResponse } from "models/responses/foreign-languages/getForeignLanguageResponse";
import { AddForeignLanguageRequest } from "models/requests/foreign-languages/addForeignLanguageRequest";
import { AddForeignLanguageResponse } from "models/responses/foreign-languages/addForeignLanguageResponse";
import { UpdateForeignLanguageRequest } from "models/requests/foreign-languages/updateForeignLanguageRequest";
import { UpdateForeignLanguageResponse } from "models/responses/foreign-languages/updateForeignLanguageResponse";

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