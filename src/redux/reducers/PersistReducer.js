import { createSlice } from "@reduxjs/toolkit";
import { VIEW_TYPE_CONSTANTS } from "../../constants/Strings";

export const persistReducerSlice = createSlice({
  name: "PersistReducer",
  initialState: {
    viewType: VIEW_TYPE_CONSTANTS.LIST,
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
