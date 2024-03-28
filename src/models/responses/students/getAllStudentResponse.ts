export interface GetAllStudentResponse {
  items: Student[];
  count: number;
}
export interface Student {
  id: string;
  identityNumber: string;
  birthDate: string;
  phoneNumber: string;
  about: string;
  imgUrl: string;
  userId:number;
  user: User;
  studentExams: StudentExam[];
  experiences: Experience[];
  studentForeignLanguages: StudentForeignLanguage[];
  studentClassrooms: StudentClassroom[];
  socialMedias: SocialMedia[];
  educations: Education[];
  certificates: Certificate[];
  abilities: Ability[];
}
export interface Ability {
  name: string;
}
export interface Certificate {
  name: string;
  fileType: string;
  fileUrl: string;
}
export interface Education {
  university: string;
  department: string;
  graduation: string;
  startDate: string;
  endDate: string;
  isContinueUniversity: boolean;
}
export interface SocialMedia {
  name: string;
  icon: string;
  socialMediaUrl: string;
}
export interface StudentClassroom {
  studentId: string;
  classroomId: string;
  studentName: string;
  className: string;
  classSize: number;
}
export interface StudentForeignLanguage {
  languageLevel: string;
  languageName: string;
}
export interface Experience {
  companyName: string;
  position: string;
  sector: string;
  startDate: string;
  endDate: string;
  isContinueJob: boolean;
}
export interface StudentExam {
  isAttended: boolean;
  countOfTrue: number;
  countOfFalse: number;
  countOfEmpty: number;
  score: number;
  examName: string;
  examDescription: string;
}
export interface User {
  firstName: string;
  lastName: string;
  email: string;
}