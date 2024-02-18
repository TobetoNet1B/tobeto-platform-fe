export interface GetAllCategoryOfModuleSetResponse{
  items: CategoryOfModuleSet[];
}
export interface CategoryOfModuleSet{
  id: string;
	name: string;
	isActive: boolean;
}