export interface GetAllTobetoSendMessageResponse {
	items : TobetoSendMessage[]
}
export interface TobetoSendMessage {
  id: string
  subject: string
  content: string
  senderName: string
  senderEmail: string
  receiverName: string
  receiverEmail: string
  createdDate: string 
}