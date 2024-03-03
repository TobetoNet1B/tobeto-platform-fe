class TokenService {
	getToken(): string | null {
		console.log("token alındı");
		return localStorage.getItem("token");
	}

	hasToken(): boolean {
		return localStorage.getItem("token") != null;
	}

	removeToken() {
		localStorage.removeItem("token");
		localStorage.removeItem("studentId");
		localStorage.removeItem("userId");
		//localStorage.removeItem("accessToken");
		console.log("token silindi");
	}
}

export default new TokenService();