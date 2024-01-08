import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCourseCategoryResponse } from "models/responses/coursecategories/getAllCourseCategoryResponse";
import { GetCourseCategoryResponse } from "models/responses/coursecategories/getCourseCategoryResponse";
import { AddCourseCategoryRequest } from "models/requests/coursecategories/addCourseCategoryRequest";
import { AddCourseCategoryResponse } from "models/responses/coursecategories/addCourseCategoryResponse";
import { UpdateCountryRequest } from "models/requests/countries/updateCountryRequest";
import { UpdateCourseCategoryResponse } from "models/responses/coursecategories/updateCourseCategoryResponse";


class CourseCategoryService extends BaseService<
	GetAllCourseCategoryResponse,
	GetCourseCategoryResponse,
	AddCourseCategoryRequest,
	AddCourseCategoryResponse,
	UpdateCountryRequest,
	UpdateCourseCategoryResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "CourseCategories";
	}

	getByFilter() {}
}

export default new CourseCategoryService();