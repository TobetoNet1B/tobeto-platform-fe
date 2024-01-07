import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCityResponse } from "models/responses/cities/getAllCityResponse";
import { GetCityResponse } from "models/responses/cities/getCityResponse";
import { AddCityRequest } from "models/requests/cities/addCityRequest";
import { AddCityResponse } from "models/responses/cities/addCityResponse";
import { UpdateCityRequest } from "models/requests/cities/updateCityRequest";
import { UpdateCityResponse } from "models/responses/cities/updateCityResponse";


class CityService extends BaseService<
	GetAllCityResponse,
	GetCityResponse,
	AddCityRequest,
	AddCityResponse,
	UpdateCityRequest,
	UpdateCityResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Cities";
	}

	getByFilter() {}
}

export default new CityService();