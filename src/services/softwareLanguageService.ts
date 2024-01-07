import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllSoftwareLanguageResponse } from "models/responses/softwarelanguages/getAllSoftwareLanguageResponse";
import { GetSoftwareLanguageResponse } from "models/responses/softwarelanguages/getSoftwareLanguageResponse";
import { AddSoftwareLanguageRequest } from "models/requests/softwarelanguages/addSoftwareLanguageRequest";
import { AddSoftwareLanguageResponse } from "models/responses/softwarelanguages/addSoftwareLanguageResponse";
import { UpdateSoftwareLanguageRequest } from "models/requests/softwarelanguages/updateSoftwareLanguageRequest";
import { UpdateSoftwareLanguageResponse } from "models/responses/softwarelanguages/updateSoftwareLanguageResponse";

class SoftwareLanguageService extends BaseService<
	GetAllSoftwareLanguageResponse,
	GetSoftwareLanguageResponse,
	AddSoftwareLanguageRequest,
	AddSoftwareLanguageResponse,
	UpdateSoftwareLanguageRequest,
	UpdateSoftwareLanguageResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "SoftwareLanguages";
	}

	getByFilter() {}
}

export default new SoftwareLanguageService();