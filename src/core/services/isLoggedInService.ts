function isLoggedInService() {
	localStorage.removeItem('token');
	localStorage.removeItem('userId');
}

export default isLoggedInService();