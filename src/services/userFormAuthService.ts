import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllUserResponse } from "models/responses/users/getAllUserResponse";
import { GetUserResponse } from "models/responses/users/getUserResponse";
import { AddUserRequest } from "models/requests/users/addUserRequest";
import { AddUserResponse } from "models/responses/users/addUserResponse";
import {UpdateUserFromAuthRequest } from "models/requests/users/updateUserFromAuthRequest";
import { UpdateUserFromAuthResponse } from "models/responses/users/updateUserFromAuthResponse";

class UserFormAuthService extends BaseService<
	GetAllUserResponse,
	GetUserResponse,
	AddUserRequest,
	AddUserResponse,
	UpdateUserFromAuthRequest,
	UpdateUserFromAuthResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Users/FromAuth";
	}

	getByFilter() {}
}

export default new UserFormAuthService();