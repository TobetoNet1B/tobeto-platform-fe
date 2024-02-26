import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/AuthSlice";
import { moduleSetReducer } from "./moduleSet/moduleSetSlice";
import { studentLessonReducer } from "./studentLesson/studentLessonSlice";
import { userReducer } from "./User/userSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	moduleSets: moduleSetReducer,
	studentLessons: studentLessonReducer,
});

export const store = configureStore({reducer: rootReducer})
export type RootState = ReturnType<typeof rootReducer>;