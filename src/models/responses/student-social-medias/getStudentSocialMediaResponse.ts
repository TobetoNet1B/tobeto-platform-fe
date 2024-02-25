export interface GetStudentSocialMediaResponse{
    studentId: string;
	socialMedia: SocialMedia[];
}


 interface SocialMedia {
	id:string;
	name: string;
	iconUrl: string;
	socialMediaUrl: string;
}
