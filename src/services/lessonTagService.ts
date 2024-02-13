import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllLessonTagResponse } from "models/responses/lesson-tags/getAllLessonTagResponse";
import { GetLessonTagResponse } from "models/responses/lesson-tags/getLessonTagResponse";
import { AddLessonTagRequest } from "models/requests/lesson-tags/addLessonTagRequest";
import { AddLessonTagResponse } from "models/responses/lesson-tags/addLessonTagResponse";
import { UpdateLessonTagRequest } from "models/requests/lesson-tags/updateLessonTagRequest";
import { UpdateLessonTagResponse } from "models/responses/lesson-tags/updateLessonTagResponse";

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