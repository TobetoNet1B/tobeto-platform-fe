export interface GetAllModulesetCategoryResponse {
  items: ModulesetCategory[];
}
export interface ModulesetCategory {
  id : string;
	moduleSetId: string;
	categoryOfModuleSetId: string;
}