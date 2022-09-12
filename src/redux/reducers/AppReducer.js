/**
 * This file has all of the reducers that are being used in the app and we don't need to persist their values. The
 * extra reducers are used to be binded with the pending, fulfilled and rejected state of the api calls.
 */

import { createSlice } from "@reduxjs/toolkit";
import { getCharacterData } from "../thunks/AppThunk";

export const appReducerSlice = createSlice({
  name: "AppReducer",
  initialState: {
    loader: false,
    characterData: [],
    errorFetchingData: "",
  },
  reducers: {
    setLoadingState: (state, action) => {
      state.loader = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacterData.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(getCharacterData.fulfilled, (state, action) => {
      state.loader = false;
      if (action?.payload && Object.keys(action?.payload).length !== 0) {
        state.characterData = action.payload;
      }
    });
    builder.addCase(getCharacterData.rejected, (state, action) => {
      state.loader = false;
      state.errorFetchingData = action.payload;
    });
  },
});

export const { setLoadingState } = appReducerSlice.actions;

export default appReducerSlice.reducer;
