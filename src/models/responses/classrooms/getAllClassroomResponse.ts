export interface GetAllClassroomResponse{
  items:Classroom[]
  }
  interface Classroom{
    id:string
    name:string
    classSize:number
  }