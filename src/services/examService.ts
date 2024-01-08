import { UpdateExamRequest } from './../models/requests/exams/updateExamRequest';
import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllExamResponse } from "models/responses/exams/getAllExamResponse";
import { GetExamResponse } from "models/responses/exams/getExamResponse";
import { AddExamRequest } from "models/requests/exams/addExamRequest";
import { AddExamResponse } from "models/responses/exams/addExamResponse";
import { UpdateExamResponse } from 'models/responses/exams/updateExamResponse';

class ExamService extends BaseService<
	GetAllExamResponse,
	GetExamResponse,
	AddExamRequest,
	AddExamResponse,
	UpdateExamRequest,
	UpdateExamResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Exams";
	}

	getByFilter() {}
}

export default new ExamService();