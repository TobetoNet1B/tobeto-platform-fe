
import {BaseService} from "./baseService";
import {BASE_API_URL} from "../environment/environment";
import { GetAllAddressResponse } from "models/responses/addresses/getAllAddressResponse";
import { GetAddressResponse } from "models/responses/addresses/getAddressResponse";
import { AddAddressResponse } from "models/responses/addresses/addAddressResponse";
import { UpdateAddressResponse } from "models/responses/addresses/updateAddressResponse";
import { AddAddressRequest } from "models/requests/addresses/addAddressRequest";
import { UpdateAddressRequest } from "models/requests/addresses/updateAddressRequest";


class AddressService extends BaseService<
	GetAllAddressResponse,
	GetAddressResponse,
	AddAddressRequest,
	AddAddressResponse,
	UpdateAddressRequest,
	UpdateAddressResponse
> {
	constructor() {
		super();
		this.apiUrl = BASE_API_URL + "Addresses";
	}

	getByFilter() {}
}

export default new AddressService();