export interface GetAllAbilityResponse {
	items : Ability[];
}
export interface Ability {
  id: string;
	name: string;
	studentId: string;
}