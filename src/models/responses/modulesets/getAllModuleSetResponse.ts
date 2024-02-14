export interface GetAllModuleSetResponse{
  items : ModuleSet[];
}
export interface ModuleSet {
  id: string;
  name: string;
  educationType: string;
  courseLevel: string;
  topic: string;
  softwareLanguageId: string;
  instructorId: string;
  activityStatus: string;
  startDate: string;
  endDate: string;
  estimatedTime: number;
  imgUrl: string;
  companyId: string;
  moduleTypeId: string;
}