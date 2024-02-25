import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/AuthSlice";
import { moduleSetReducer } from "./moduleSet/moduleSetSlice";
import { studentLessonReducer } from "./studentLesson/studentLessonSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	moduleSets: moduleSetReducer,
	studentLessons: studentLessonReducer,
});

export const store = configureStore({reducer: rootReducer})
export type RootState = ReturnType<typeof rootReducer>;