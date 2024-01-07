import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCompanyResponse } from "models/responses/companies/getAllCompanyResponse";
import { GetCompanyResponse } from "models/responses/companies/getCompanyResponse";
import { AddCompanyRequest } from "models/requests/companies/addCompanyRequest";
import { AddCategoryResponse } from "models/responses/categories/addCategoryResponse";
import { UpdateCompanyRequest } from "models/requests/companies/updateCompanyRequest";
import { UpdateCompanyResponse } from "models/responses/companies/updateCompanyResponse";


class CompanyService extends BaseService<
	GetAllCompanyResponse,
	GetCompanyResponse,
	AddCompanyRequest,
	AddCategoryResponse,
	UpdateCompanyRequest,
	UpdateCompanyResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Companies";
	}

	getByFilter() {}
}

export default new CompanyService();