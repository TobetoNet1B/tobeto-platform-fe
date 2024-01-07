import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCountryResponse } from "models/responses/countries/getAllCountryResponse";
import { GetCountryResponse } from "models/responses/countries/getCountryResponse";
import { AddCountryRequest } from "models/requests/countries/addCountryRequest";
import { AddCountryResponse } from "models/responses/countries/addCountryResponse";
import { UpdateCountryRequest } from "models/requests/countries/updateCountryRequest";
import { UpdateCountryResponse } from "models/responses/countries/updateCountryResponse";


class CountryService extends BaseService<
	GetAllCountryResponse,
	GetCountryResponse,
	AddCountryRequest,
	AddCountryResponse,
	UpdateCountryRequest,
	UpdateCountryResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Countries";
	}

	getByFilter() {}
}

export default new CountryService();