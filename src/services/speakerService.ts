import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllSpeakerResponse } from "models/responses/speakers/getAllSpeakerResponse";
import { GetSpeakerResponse } from "models/responses/speakers/getSpeakerResponse";
import { AddSpeakerRequest } from "models/requests/speakers/addSpeakerRequest";
import { AddSpeakerResponse } from "models/responses/speakers/addSpeakerResponse";
import { UpdateSpeakerRequest } from "models/requests/speakers/updateSpeakerRequest";
import { UpdateSpeakerResponse } from "models/responses/speakers/updateSpeakerResponse";
class SpeakerService extends BaseService<
	GetAllSpeakerResponse,
	GetSpeakerResponse,
	AddSpeakerRequest,
	AddSpeakerResponse,
	UpdateSpeakerRequest,
	UpdateSpeakerResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Speakers";
	}

	getByFilter() {}
}

export default new SpeakerService();