import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false
	},
	reducers: {
		LogInLogOut: state => {
			state.isLoggedIn = !state.isLoggedIn
		}
	}
})

export const authReducer = authSlice.reducer;
export const { LogInLogOut } = authSlice.actions;
export const SelectIsLoggedIn = (state:any) => state.auth.isLoggedIn;