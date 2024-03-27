export interface GetAllCountryResponse {
  items: Item[]
  index: number
  size: number
  count: number
  pages: number
  hasPrevious: boolean
  hasNext: boolean
}

export interface Item {
  id: string
  name: string
}
