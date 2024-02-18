import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllAnnouncementResponse } from "models/responses/announcements/getAllAnnouncementResponse";
import { GetAnnouncementResponse } from "models/responses/announcements/getAnnouncementResponse";
import { AddAnnouncementRequest } from "models/requests/announcements/addAnnouncementRequest";
import { AddAnnouncementResponse } from "models/responses/announcements/addAnnouncementResponse";
import { UpdateAnnouncementRequest } from "models/requests/announcements/updateAnnouncementRequest";
import { UpdateAnnouncementResponse } from "models/responses/announcements/updateAnnouncementResponse";

class AnnouncementService extends BaseService<
	GetAllAnnouncementResponse,
	GetAnnouncementResponse,
	AddAnnouncementRequest,
	AddAnnouncementResponse,
	UpdateAnnouncementRequest,
	UpdateAnnouncementResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Announcements";
	}
	getByFilter() {}
}

export default new AnnouncementService();