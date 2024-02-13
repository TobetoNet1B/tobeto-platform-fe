export interface GetAllBlogResponse{
  items: Blog[];
}
export interface Blog{
  id: string;
	title: string;
	description: string;
	imgUrl: string;
}