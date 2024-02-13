import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllUserOperationClaimResponse } from "models/responses/user-operation-claims/getAllUserOperationClaimResponse";
import { GetUserOperationClaimResponse } from "models/responses/user-operation-claims/getUserOperationClaimResponse";
import { AddUserOperationClaimRequest } from "models/requests/user-operation-claims/addUserOperationClaimRequest";
import { AddUserOperationClaimResponse } from "models/responses/user-operation-claims/addUserOperationClaimResponse";
import { UpdateUserOperationClaimRequest } from "models/requests/user-operation-claims/updateUserOperationClaimRequest";
import { UpdateUserOperationClaimResponse } from "models/responses/user-operation-claims/updateUserOperationClaimResponse";

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