export interface UpdateUserFromAuthResponse {
  id: number
  firstName: string
  lastName: string
  email: string
  accessToken: AccessToken
}

export interface AccessToken {
  token: string
  expiration: string
}
