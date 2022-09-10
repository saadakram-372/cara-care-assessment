import { createSlice } from "@reduxjs/toolkit";

export const persistReducerSlice = createSlice({
  name: "PersistReducer",
  initialState: {
    viewType: "list",
    favouritesData: [],
  },
  reducers: {
    setDataViewType: (state, action) => {
      state.viewType = action.payload;
    },
    setFavouritesData: (state, action) => {
      state.favouritesData = [...state.favouritesData, action.payload];
    },
  },
});

export const { setDataViewType, setFavouritesData } =
  persistReducerSlice.actions;
export default persistReducerSlice.reducer;
