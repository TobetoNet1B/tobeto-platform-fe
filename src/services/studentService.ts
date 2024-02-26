import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentResponse } from "models/responses/students/getAllStudentResponse";
import { GetStudentResponse } from "models/responses/students/getStudentResponse";
import { AddStudentRequest } from "models/requests/students/addStudentRequest";
import { AddStudentResponse } from "models/responses/students/addStudentResponse";
import { UpdateStudentRequest } from "models/requests/students/updateStudentRequest";
import { UpdateStudentResponse } from "models/responses/students/updateStudentResponse";
import axios, { AxiosResponse } from "axios";

class StudentService extends BaseService<
	GetAllStudentResponse,
	GetStudentResponse,
	AddStudentRequest,
	AddStudentResponse,
	UpdateStudentRequest,
	UpdateStudentResponse	
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Students";
	}

	// GetByUserPlatformId(id: number) : Promise<AxiosResponse<GetByIdType, any>>{
	// 	return axios.get<GetByIdType>(this.apiUrl + "/" + id);
	// }


}

export default new StudentService();