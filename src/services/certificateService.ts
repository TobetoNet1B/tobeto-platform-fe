import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllCertificateResponse } from "models/responses/certificates/getAllCertificateResponse";
import { GetCertificateResponse } from "models/responses/certificates/getCertificateResponse";
import { AddCertificateRequest } from "models/requests/certificates/addCertificateRequest";
import { AddCertificateResponse } from "models/responses/certificates/addCertificateResponse";
import { UpdateCertificateRequest } from "models/requests/certificates/updateCertificateRequest";
import { UpdateCertificateResponse } from "models/responses/certificates/updateCertificateResponse";


class CertificateService extends BaseService<
	GetAllCertificateResponse,
	GetCertificateResponse,
	AddCertificateRequest,
	AddCertificateResponse,
	UpdateCertificateRequest,
	UpdateCertificateResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Certificates";
	}

	getByFilter() {}
}

export default new CertificateService();