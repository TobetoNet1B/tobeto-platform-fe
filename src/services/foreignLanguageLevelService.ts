import { AddForeignLanguageLevelResponse } from './../models/responses/foreignlanguagelevels/addForeignLanguageLevelResponse';
import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllForeignLanguageLevelResponse } from "models/responses/foreignlanguagelevels/getAllForeignLanguageLevelResponse";
import { getForeignLanguageLevelResponse } from "models/responses/foreignlanguagelevels/getForeignLanguageLevelResponse";
import { AddForeignLanguageLevelRequest } from "models/requests/foreignlanguagelevels/addForeignLanguageLevelRequest";
import { UpdateForeignLanguageLevelRequest } from 'models/requests/foreignlanguagelevels/updateForeignLanguageLevelRequest';
import { UpdateForeignLanguageLevelResponse } from 'models/responses/foreignlanguagelevels/updateForeignLanguageLevelResponse';

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