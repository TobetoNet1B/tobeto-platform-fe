export interface GetAllAppealResponse {
	items : Appeal[];
}
export interface Appeal {
  id: string;
  name: string;
	description: string;
}