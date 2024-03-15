export interface GetAllTobetoContactResponse {
	items : TobetoContact[]
}
export interface TobetoContact {
  id: string
  fullName: string
  email: string
  message: string
  isReaded: boolean
}