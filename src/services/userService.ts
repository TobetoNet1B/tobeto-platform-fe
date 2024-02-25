import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllUserResponse } from "models/responses/users/getAllUserResponse";
import { GetUserResponse } from "models/responses/users/getUserResponse";
import { AddUserRequest } from "models/requests/users/addUserRequest";
import { AddUserResponse } from "models/responses/users/addUserResponse";
import { UpdateUserRequest } from "models/requests/users/updateUserRequest";
import { UpdateUserResponse } from "models/responses/users/updateUserResponse";
import { AxiosResponse } from "axios";

class UserService extends BaseService<
	GetAllUserResponse,
	GetUserResponse,
	AddUserRequest,
	AddUserResponse,
	UpdateUserRequest,
	UpdateUserResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Users";
	}

	getByFilter() {}
}

export default new UserService();