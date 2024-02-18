import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { UpdateModuleSetResponse } from './../models/responses/modulesets/updateModuleSetResponse';
import { GetAllModuleSetResponse } from "models/responses/modulesets/getAllModuleSetResponse";
import { GetModuleSetResponse } from "models/responses/modulesets/getModuleSetResponse";
import { AddModuleSetRequest } from "models/requests/modulesets/addModuleSetRequest";
import { AddModuleSetResponse } from "models/responses/modulesets/addModuleSetResponse";
import { UpdateModuleSetRequest } from "models/requests/modulesets/updateModuleSetRequest";

class ModuleSetService extends BaseService<
	GetAllModuleSetResponse,
	GetModuleSetResponse,
	AddModuleSetRequest,
	AddModuleSetResponse,
	UpdateModuleSetRequest,
	UpdateModuleSetResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "ModuleSets";
	}

	getByFilter() {}
}

export default new ModuleSetService();