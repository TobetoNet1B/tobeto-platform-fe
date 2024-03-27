export interface GetAllSocialMediaResponse {
    items: Item[]
}
interface Item {
    id: string
    name: string
    iconUrl: string
}