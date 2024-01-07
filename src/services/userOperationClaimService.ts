import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllUserOperationClaimResponse } from "models/responses/useroperationclaims/getAllUserOperationClaimResponse";
import { GetUserOperationClaimResponse } from "models/responses/useroperationclaims/getUserOperationClaimResponse";
import { AddUserOperationClaimRequest } from "models/requests/useroperationclaims/addUserOperationClaimRequest";
import { AddUserOperationClaimResponse } from "models/responses/useroperationclaims/addUserOperationClaimResponse";
import { UpdateUserOperationClaimRequest } from "models/requests/useroperationclaims/updateUserOperationClaimRequest";
import { UpdateUserOperationClaimResponse } from "models/responses/useroperationclaims/updateUserOperationClaimResponse";

class UserOperationClaimService extends BaseService<
	GetAllUserOperationClaimResponse,
	GetUserOperationClaimResponse,
	AddUserOperationClaimRequest,
	AddUserOperationClaimResponse,
	UpdateUserOperationClaimRequest,
	UpdateUserOperationClaimResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "UserOperationClaims";
	}

	getByFilter() {}
}

export default new UserOperationClaimService();