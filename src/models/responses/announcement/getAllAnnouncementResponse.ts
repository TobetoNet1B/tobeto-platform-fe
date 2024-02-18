export interface GetAllAnnouncementResponse{
    items :Announcement[]
 
}
interface Announcement{
    title:string
    description:string
    createdDate:Date
}