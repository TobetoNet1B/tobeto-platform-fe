import { BaseService } from "./baseService";
import { BASE_API_URL } from "../environment/environment";
import { GetAllSoftwareLanguageResponse } from "models/responses/software-languages/getAllSoftwareLanguageResponse";
import { GetSoftwareLanguageResponse } from "models/responses/software-languages/getSoftwareLanguageResponse";
import { AddSoftwareLanguageRequest } from "models/requests/software-languages/addSoftwareLanguageRequest";
import { AddSoftwareLanguageResponse } from "models/responses/software-languages/addSoftwareLanguageResponse";
import { UpdateSoftwareLanguageRequest } from "models/requests/software-languages/updateSoftwareLanguageRequest";
import { UpdateSoftwareLanguageResponse } from "models/responses/software-languages/updateSoftwareLanguageResponse";

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

	getByFilter() { }
}

export default new SoftwareLanguageService();