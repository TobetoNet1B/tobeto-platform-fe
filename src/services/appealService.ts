import { BaseService } from "./baseService";
import { BASE_API_URL } from "../environment/environment";
import { GetAllAppealResponse } from "models/responses/appeals/getAllAppealResponse";
import { GetAppealResponse } from "models/responses/appeals/getAppealResponse";
import { AddAppealResponse } from "models/responses/appeals/addAppealResponse";
import { UpdateAppealResponse } from "models/responses/appeals/updateAppealResponse";
import { AddApprealRequest } from "models/requests/appeals/addApprealRequest";
import { UpdateApprealRequest } from "models/requests/appeals/updateApprealRequest";

class AppealService extends BaseService<
  GetAllAppealResponse,
  GetAppealResponse,
  AddApprealRequest,
  AddAppealResponse,
  UpdateApprealRequest,
  UpdateAppealResponse
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Appeals";
  }

  getByFilter() {}
}

export default new AppealService();
