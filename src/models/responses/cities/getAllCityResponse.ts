export interface GetAllCityResponse {
  items: Item[]
}

export interface Item {
  id: string
  name: string
  countryId: string
}

