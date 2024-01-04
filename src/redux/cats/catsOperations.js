import { createAsyncThunk } from "@reduxjs/toolkit";

export const addOffice = createAsyncThunk(
  "cats/addOffice",
  async (state, thunkAPI) => {
    try {
      return state;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCat = createAsyncThunk(
  "cats/addCat",
  async (state, thunkAPI) => {
    try {
      return state;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
