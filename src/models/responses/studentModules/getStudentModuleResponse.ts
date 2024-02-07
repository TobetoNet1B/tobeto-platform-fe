export interface GetStudentModuleResponse{
    id:string;
student:Student[];
moduleSets:ModuleSet[];
}
export interface Student{
    id:string;
}
export default interface ModuleSet{
    id:string;
    name:string;
    description:string;
    imgUrl:string;
    companyName:string;
    createdDate:Date;

}