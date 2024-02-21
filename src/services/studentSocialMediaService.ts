import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllStudentSocialMediaResponse } from "models/responses/student-social-medias/getAllStudentSocialMediaResponse";
import { GetStudentSocialMediaResponse } from "models/responses/student-social-medias/getStudentSocialMediaResponse";
import { AddStudentSocialMediaRequest } from "models/requests/student-social-medias/AddStudentSocialMediaRequest";
import { AddStudentSocialMediaResponse } from "models/responses/student-social-medias/addStudentSocialMediaResponse";
import { UpdateStudentSocialMediaRequest } from "models/requests/student-social-medias/UpdateStudentSocialMediaRequest";
import { UpdateSocialMediaResponse } from "models/responses/social-medias/updateSocialMediaResponse";

class StudentSocialMediaService extends BaseService<
	GetAllStudentSocialMediaResponse,
	GetStudentSocialMediaResponse,
	AddStudentSocialMediaRequest,
	AddStudentSocialMediaResponse,
	UpdateStudentSocialMediaRequest,
	UpdateSocialMediaResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "StudentSocialMedias";
	}

	getByFilter() {}


}

export default new StudentSocialMediaService();