
import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { UpdateAbilityRequest } from "models/requests/abilities/updateAbilityRequest";
import { AddAbilityResponse } from "models/responses/abilities/addAbilityResponse";
import { UpdateAbilityResponse } from "models/responses/abilities/updateAbilityResponse";
import { GetAllAbilityResponse } from "models/responses/abilities/getAllAbilityResponse";
import { GetAbilityResponse } from "models/responses/abilities/getAbilityResponse";
import { AddAbilityRequest } from "models/requests/abilities/addAbilityRequest";

class AbilityService extends BaseService<
	GetAllAbilityResponse,
	GetAbilityResponse,
	AddAbilityRequest,
	AddAbilityResponse,
	UpdateAbilityRequest,
	UpdateAbilityResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Abilities";
	}

	getByFilter() {}
}

export default new AbilityService();