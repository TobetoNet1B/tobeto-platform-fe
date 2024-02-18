import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { AddForeignLanguageLevelResponse } from './../models/responses/foreign-language-levels/addForeignLanguageLevelResponse';
import { GetAllForeignLanguageLevelResponse } from "models/responses/foreign-language-levels/getAllForeignLanguageLevelResponse";
import { getForeignLanguageLevelResponse } from "models/responses/foreign-language-levels/getForeignLanguageLevelResponse";
import { AddForeignLanguageLevelRequest } from "models/requests/foreign-language-levels/addForeignLanguageLevelRequest";
import { UpdateForeignLanguageLevelRequest } from 'models/requests/foreign-language-levels/updateForeignLanguageLevelRequest';
import { UpdateForeignLanguageLevelResponse } from 'models/responses/foreign-language-levels/updateForeignLanguageLevelResponse';

class ForeignLanguageLevelService extends BaseService<
	GetAllForeignLanguageLevelResponse,
	getForeignLanguageLevelResponse,
	AddForeignLanguageLevelRequest,
	AddForeignLanguageLevelResponse,
	UpdateForeignLanguageLevelRequest,
	UpdateForeignLanguageLevelResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "ForeignLanguageLevels";
	}

	getByFilter() {}
}

export default new ForeignLanguageLevelService();