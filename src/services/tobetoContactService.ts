import { BaseService } from "./baseService";
import { BASE_API_URL } from "environment/environment";
import { GetAllTobetoContactResponse } from "models/responses/tobeto-contact/getAllTobetoContactResponse";
import { GetTobetoContactResponse } from "models/responses/tobeto-contact/getTobetoContactResponse";
import { AddTobetoContactRequest } from "models/requests/tobeto-contact/addTobetoContactRequest";
import { AddTobetoContactResponse } from "models/responses/tobeto-contact/addTobetoContactResponse";
import { UpdateTobetoContactRequest } from "models/requests/tobeto-contact/updateTobetoContactRequest";
import { UpdateTobetoContactResponse } from "models/responses/tobeto-contact/updateTobetoContactResponse";

class TobetoContactService extends BaseService<
	GetAllTobetoContactResponse,
	GetTobetoContactResponse,
	AddTobetoContactRequest,
	AddTobetoContactResponse,
	UpdateTobetoContactRequest,
	UpdateTobetoContactResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "TobetoContacts";
	}

	getByFilter() {}
}

export default new TobetoContactService();