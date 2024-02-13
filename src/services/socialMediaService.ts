import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { AddSocialMediaResponse } from './../models/responses/social-medias/addSocialMediaResponse';
import { GetAllSocialMediaResponse } from "models/responses/social-medias/getAllSocialMediaResponse";
import { GetSocialMediaResponse } from "models/responses/social-medias/getSocialMediaResponse";
import { AddSocialMediaRequest } from "models/requests/social-medias/addSocialMediaRequest";
import { UpdateSocialMediaRequest } from 'models/requests/social-medias/updateSocialMediaRequest';
import { UpdateSocialMediaResponse } from 'models/responses/social-medias/updateSocialMediaResponse';

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