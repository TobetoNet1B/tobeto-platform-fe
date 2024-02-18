export interface GetAllModuleTypeResponse {
  items: ModuleType[];
}
export interface ModuleType {
  id : string;
	moduleSetId: string;
	categoryOfModuleSetId: string;
}