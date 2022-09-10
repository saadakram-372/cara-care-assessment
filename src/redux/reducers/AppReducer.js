import { createSlice } from "@reduxjs/toolkit";

export const appReducerSlice = createSlice({
  name: "AppReducer",
  initialState: {
    loader: false,
  },
  reducers: {
    setLoadingState: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { setLoadingState } = appReducerSlice.actions;

export default appReducerSlice.reducer;
