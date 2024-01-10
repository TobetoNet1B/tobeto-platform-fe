import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllTagResponse } from "models/responses/tags/getAllTagResponse";
import { GetTagResponse } from "models/responses/tags/getTagResponse";
import { AddTagRequest } from "models/requests/tags/addTagRequest";
import { AddTagResponse } from "models/responses/tags/addTagResponse";
import { UpdateTagRequest } from "models/requests/tags/updateTagRequest";
import { UpdateTagResponse } from "models/responses/tags/updateTagResponse";

class TagService extends BaseService<
	GetAllTagResponse,
	GetTagResponse,
	AddTagRequest,
	AddTagResponse,
	UpdateTagRequest,
	UpdateTagResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Tags";
	}

	getByFilter() {}
}

export default new TagService();