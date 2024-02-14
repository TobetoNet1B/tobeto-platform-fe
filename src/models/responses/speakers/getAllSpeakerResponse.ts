export interface GetAllSpeakerResponse{
  items:Speaker[];
}
export interface Speaker {
  id: string;
	firstName: string;
	lastName: string;
	about: string;
}