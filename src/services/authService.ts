import axiosInstance from "../core/interceptors/axiosInterceptor";

class AuthService {
	// modelleme
	register(model: any) {
		return axiosInstance.post("Auth/Register", model);
	}

	login(model: any) {
		return axiosInstance.post("Auth/Login", model);
	}
}

export default new AuthService();