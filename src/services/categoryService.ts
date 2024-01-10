import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCategoryResponse } from "models/responses/categories/getAllCategoryResponse";
import { GetCategoryResponse } from "models/responses/categories/getCategoryResponse";
import { AddCategoryRequest } from "models/requests/categories/addCategoryRequest";
import { AddCategoryResponse } from "models/responses/categories/addCategoryResponse";
import { UpdateCategoryRequest } from "models/requests/categories/updateCategoryRequest";
import { UpdateCategoryResponse } from "models/responses/categories/updateCategoryResponse";

class CategoryService extends BaseService<
	GetAllCategoryResponse,
	GetCategoryResponse,
	AddCategoryRequest,
	AddCategoryResponse,
	UpdateCategoryRequest,
	UpdateCategoryResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Categories";
	}

	getByFilter() {}
}

export default new CategoryService();