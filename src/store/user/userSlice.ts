import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		firstName: "",
		lastName: "",
		imgUrl: ""
	},
	reducers: {
		setFirstName(state, action) {
			return { ...state, firstName: action.payload };
		},
		setLastName(state, action) {
			return { ...state, lastName: action.payload };
		},
		setImgUrl(state, action) {
			return { ...state, imgUrl: action.payload };
		}
	}
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const { setFirstName, setLastName, setImgUrl } = userSlice.actions;

export const SelectFullName = (state: any) => state.user.firtName + ' ' + state.user.lastName;
export const SelectImgUrl = (state: any) => state.user.img;