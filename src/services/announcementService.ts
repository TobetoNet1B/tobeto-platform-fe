import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllAnnouncementResponse } from "models/responses/announcement/getAllAnnouncementResponse";
import { GetAnnouncementResponse } from "models/responses/announcement/getAnnouncementResponse";
import { AddAnnouncementRequest } from "models/requests/announcement/addAnnouncementRequest";
import { AddAnnouncementResponse } from "models/responses/announcement/addAnnouncementResponse";
import { UpdateAnnouncementRequest } from "models/requests/announcement/updateAnnouncementRequest";
import { UpdateAnnouncementResponse } from "models/responses/announcement/updateAnnouncementResponse";

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