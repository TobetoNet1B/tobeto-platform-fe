import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllDistrictResponse } from "models/responses/districts/getAllDistrictResponse";
import { GetDistrictResponse } from "models/responses/districts/getDistrictResponse";
import { AddDistrictRequest } from "models/requests/districts/addDistrictRequest";
import { AddDistrictResponse } from "models/responses/districts/addDistrictResponse";
import { UpdateDistrictRequest } from "models/requests/districts/updateDistrictRequest";
import { UpdateAbilityRequest } from "models/requests/abilities/updateAbilityRequest";

class DistrictService extends BaseService<
	GetAllDistrictResponse,
	GetDistrictResponse,
	AddDistrictRequest,
	AddDistrictResponse,
	UpdateDistrictRequest,
	UpdateAbilityRequest
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Districts";
	}

	getByFilter() {}
}

export default new DistrictService();