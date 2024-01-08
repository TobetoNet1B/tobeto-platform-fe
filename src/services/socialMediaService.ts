import { AddSocialMediaResponse } from './../models/responses/socialmedias/addSocialMediaResponse';
import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllSocialMediaResponse } from "models/responses/socialmedias/getAllSocialMediaResponse";
import { GetSocialMediaResponse } from "models/responses/socialmedias/getSocialMediaResponse";
import { AddSocialMediaRequest } from "models/requests/socialmedias/addSocialMediaRequest";
import { UpdateSocialMediaRequest } from 'models/requests/socialmedias/updateSocialMediaRequest';
import { UpdateSocialMediaResponse } from 'models/responses/socialmedias/updateSocialMediaResponse';

class SocialMediaService extends BaseService<
	GetAllSocialMediaResponse,
	GetSocialMediaResponse,
	AddSocialMediaRequest,
	AddSocialMediaResponse,
	UpdateSocialMediaRequest,
	UpdateSocialMediaResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "SocialMedias";
	}

	getByFilter() {}
}

export default new SocialMediaService();