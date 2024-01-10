import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllBlogResponse } from "models/responses/blogs/getAllBlogResponse";
import { GetBlogResponse } from "models/responses/blogs/getBlogResponse";
import { AddBlogRequest } from "models/requests/blogs/addBlogRequest";
import { AddBlogResponse } from "models/responses/blogs/addBlogResponse";
import { UpdateBlogRequest } from "models/requests/blogs/updateBlogRequest";
import { UpdateBlogResponse } from "models/responses/blogs/updateBlogResponse";


class BlogService extends BaseService<
	GetAllBlogResponse,
	GetBlogResponse,
	AddBlogRequest,
	AddBlogResponse,
	UpdateBlogRequest,
	UpdateBlogResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Blogs";
	}

	getByFilter() {}
}

export default new BlogService();