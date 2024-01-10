import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllLessonTagResponse } from "models/responses/lessontags/getAllLessonTagResponse";
import { GetLessonTagResponse } from "models/responses/lessontags/getLessonTagResponse";
import { AddLessonTagRequest } from "models/requests/lessontags/addLessonTagRequest";
import { AddLessonTagResponse } from "models/responses/lessontags/addLessonTagResponse";
import { UpdateLessonTagRequest } from "models/requests/lessontags/updateLessonTagRequest";
import { UpdateLessonTagResponse } from "models/responses/lessontags/updateLessonTagResponse";

class LessonTagService extends BaseService<
	GetAllLessonTagResponse,
	GetLessonTagResponse,
	AddLessonTagRequest,
	AddLessonTagResponse,
	UpdateLessonTagRequest,
	UpdateLessonTagResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "LessonTags";
	}

	getByFilter() {}
}

export default new LessonTagService();