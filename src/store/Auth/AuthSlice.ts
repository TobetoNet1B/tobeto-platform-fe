import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false
	},
	reducers: {
		
	}
})

export const authReducer = authSlice.reducer;

export const SelectIsLoggedIn = (state:any) => state.auth.isLoggedIn;