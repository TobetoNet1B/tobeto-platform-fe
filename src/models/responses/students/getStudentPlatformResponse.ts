export interface GetStudentPlatformResponse {
    id: string
    imgUrl: any
    user: User
    studentExams: StudentExam[]
    studentAppeals: StudentAppeal[]
    surveys: Survey[]
  }
  
  export interface User {
    id: number
    firstName: string
    lastName: string
  }
  
  export interface StudentExam {
    id: string
    name: string
    description: string
    time: number
    questionCount: number
    questionType: string
  }
  
  export interface StudentAppeal {
    name: string
    description: string
  }
  
  export interface Survey {
    title: string
    description: string
    surveyUrl: string
  }
  