import axios, { AxiosResponse } from "axios";

export class BaseService<
	GetAllType,
  GetByIdType,
  AddRequestType,
  UpdateRequestType,
  UpdateResponseType> {

	public apiUrl: string

	constructor() {
		this.apiUrl = "";
	}

	getAll(): Promise<AxiosResponse<GetAllType, any>> {
		return axios.get<GetAllType>(this.apiUrl)
	}

	getById(id: number): Promise<AxiosResponse<GetByIdType, any>> {
		return axios.get<GetByIdType>(this.apiUrl + '/' + id)
	}

	add(request: AddRequestType): Promise<AxiosResponse<AddRequestType, any>> {
		return axios.post<AddRequestType>(this.apiUrl, request)
	}

	update(
		request: UpdateRequestType,
	): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axios.put<UpdateResponseType>(this.apiUrl, request);
	}

	delete(id: number) {
		return axios.delete(this.apiUrl + "/" + id);
	}
}