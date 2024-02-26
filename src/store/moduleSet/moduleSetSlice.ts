import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetModuleSetResponse } from "models/responses/modulesets/getModuleSetResponse";
import ModuleSetService from "services/moduleSetService";

export const fetchModuleSetById = createAsyncThunk(
  "moduleSets/fetchModuleSetById",
  async (moduleSetId: string) => {
    try {
      const response = await ModuleSetService.getById(moduleSetId);
      if (!response.data) throw new Error("HTTP error " + response.status);
      return await response.data;
    } catch (error) {
      console.log("Error in moduleSets/fetchModuleSetById: ", error);
      throw error;
    }
  }
);

const initialState = {
  moduleSet: {} as GetModuleSetResponse,
  status: 'idle',
  error: null as any,
};

const moduleSetSlice = createSlice({
  name: 'moduleSets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchModuleSetById.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchModuleSetById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moduleSet = action.payload;
      })
      .addCase(fetchModuleSetById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const moduleSetReducer = moduleSetSlice.reducer;
export const moduleSetActions = moduleSetSlice.actions;