import { createSlice } from "@reduxjs/toolkit";
import tokenServices from "core/services/tokenService";

const getInitialState = () => {
	if (tokenServices.hasToken())
		return { isAuthenticated: true };
	return { isAuthenticated: false };
};

const authSlice = createSlice({
	name: "auth",
	initialState: getInitialState(),
	reducers: {
		logout: () => {
			tokenServices.removeToken();
			window.location.reload();
		},
	},
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const { logout } = authSlice.actions;
export const SelectIsAuthenticated = (state: any) => state.auth.isAuthenticated;