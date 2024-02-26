import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentResponse } from "models/responses/students/getAllStudentResponse";
import { GetStudentResponse } from "models/responses/students/getStudentResponse";
import { AddStudentRequest } from "models/requests/students/addStudentRequest";
import { AddStudentResponse } from "models/responses/students/addStudentResponse";
import { UpdateStudentRequest } from "models/requests/students/updateStudentRequest";
import { UpdateStudentResponse } from "models/responses/students/updateStudentResponse";
import axios, { AxiosResponse } from "axios";
import { GetStudentPlatformResponse } from "models/responses/students/getStudentPlatformResponse";

class StudentPlatformService extends BaseService<
    GetAllStudentResponse,
    GetStudentPlatformResponse,
    AddStudentRequest,
    AddStudentResponse,
    UpdateStudentRequest,
    UpdateStudentResponse
>{
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Students";
    }


    getByUserPlatformId(id: string): Promise<AxiosResponse<GetStudentPlatformResponse, any>> {
        return axios.get<GetStudentPlatformResponse>(this.apiUrl + "/ByUserId/" + id);
    }

}

export default new StudentPlatformService();
