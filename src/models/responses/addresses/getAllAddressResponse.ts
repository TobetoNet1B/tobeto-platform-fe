export interface GetAllAddressResponse {
	items : Address[];
}
export interface Address {
  id: string;
  countryId: string;
	cityId: string;
	districtId: string;
	studentId: string;
	addressDetails: string;
}