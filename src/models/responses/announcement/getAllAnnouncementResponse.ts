export interface GetAllAnnouncementResponse {
  items: Announcement[]

}
interface Announcement {
  id: string;
  title: string
  description: string
  createdDate: Date
}