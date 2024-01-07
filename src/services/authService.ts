import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllAuthResponse } from "models/responses/auth/getAllAuthResponse";
import { GetAuthResponse } from "models/responses/auth/getAuthResponse";
import { AddAuthResponse } from "models/responses/auth/addAuthResponse";
import { UpdateAuthResponse } from "models/responses/auth/updateAuthResponse";
import { UpdateAuthRequest } from "models/requests/auth/updateAuthRequest";
import { AddAuthRequest } from "models/requests/auth/addAuthRequest";


class AuthService extends BaseService<
	GetAllAuthResponse,
	GetAuthResponse,
	AddAuthRequest,
	AddAuthResponse,
	UpdateAuthRequest,
	UpdateAuthResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Auth";
	}

	getByFilter() {}
}

export default new AuthService();