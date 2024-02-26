import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GetStudentLessonResponse } from 'models/responses/student-lessons/getStudentLessonResponse';
import StudentLessonService from 'services/studentLessonService';

export const getStudentLessonByStudentId = createAsyncThunk(
  'studentLessons/getStudentLessonByStudentId',
  async (studentLessonId: string) => {
    try {
      const response = await StudentLessonService.getById(studentLessonId);
      if (!response.data) throw new Error('Bir hata oluştu.' + response.status);
      return await response.data;
    } catch (error) {
      console.log("Error in studentLessons/getStudentLessonByStudentId: ", error);
      throw error;
    }
  }
);

export const updateWatchedStatus = (id: string | null, studentId: string | null, lessonId: string | null, isLiked: boolean | null) => async (dispatch: any) => {
  try {
    if (lessonId !== null && id !== null && studentId !== null && isLiked !== null) {
      await StudentLessonService.update({
        id,
        studentId,
        lessonId,
        isLiked,
        isWatched: true,
      });
    }
    dispatch(setWatched(true));
  } catch (error) {
    console.error('Video izleme durumu güncellenirken bir hata oluştu:', error);
  }
};

const initialState = {
  getStudentLesson: {} as GetStudentLessonResponse,
  status: 'idle',
  error: null as any,
  isWatched: false,
};

const studentLessonSlice = createSlice({
  name: 'studentLessons',
  initialState,
  reducers: {
    setWatched: (state, action: PayloadAction<boolean>) => {
      state.isWatched = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStudentLessonByStudentId.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getStudentLessonByStudentId.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.getStudentLesson = action.payload;
    });
    builder.addCase(getStudentLessonByStudentId.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const studentLessonReducer = studentLessonSlice.reducer;
export const studentLessonActions = studentLessonSlice.actions;
export const { setWatched } = studentLessonSlice.actions;