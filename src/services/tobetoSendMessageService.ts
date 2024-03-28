import { GetAllTobetoSendMessageResponse } from "models/responses/tobeto-send-message/getAllTobetoSendMessageResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "environment/environment";
import { GetTobetoSendMessageResponse } from "models/responses/tobeto-send-message/getTobetoSendMessageResponse";
import { AddTobetoSendMessageRequest } from "models/requests/tobeto-send-message/addTobetoSendMessageRequest";
import { AddTobetoSendMessageResponse } from "models/responses/tobeto-send-message/addTobetoSendMessageResponse";
import { UpdateTobetoSendMessageRequest } from "models/requests/tobeto-send-message/updateTobetoSendMessageRequest";
import { UpdateTobetoSendMessageResponse } from "models/responses/tobeto-send-message/updateTobetoSendMessageResponse";

class TobetoSendMessageService extends BaseService<
	GetAllTobetoSendMessageResponse,
	GetTobetoSendMessageResponse,
	AddTobetoSendMessageRequest,
	AddTobetoSendMessageResponse,
	UpdateTobetoSendMessageRequest,
	UpdateTobetoSendMessageResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "TobetoSendMessages";
	}

	getByFilter() {}
}

export default new TobetoSendMessageService();