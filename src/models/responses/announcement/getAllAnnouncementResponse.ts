export interface GetAllAnnouncementResponse {
	items : Announcement[];
}
export interface Announcement {
  id: string;
	title: string;
	description: string;
}