export interface GetStudentResponse {
	id: string;

  userId: number;

  identityNumber: string;

  birthDate: string;

  phoneNumber: string;

  about: string;

  imgUrl: string;

  user: User;

}


export interface User {

  firstName: string;

  lastName: string;

  email: string;

}

