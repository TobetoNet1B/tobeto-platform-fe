import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllLessonResponse } from "models/responses/lessons/getAllLessonResponse";
import { GetLessonResponse } from "models/responses/lessons/getLessonResponse";
import { AddLessonsRequest } from "models/requests/lessons/addLessonsRequest";
import { AddLessonResponse } from "models/responses/lessons/addLessonResponse";
import { UpdateLessonsRequest } from "models/requests/lessons/updateLessonsRequest";
import { UpdateLessonResponse } from "models/responses/lessons/updateLessonResponse";
class LessonService extends BaseService<
	GetAllLessonResponse,
	GetLessonResponse,
	AddLessonsRequest,
	AddLessonResponse,
	UpdateLessonsRequest,
	UpdateLessonResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Lessons";
	}

	getByFilter() {}
}

export default new LessonService();