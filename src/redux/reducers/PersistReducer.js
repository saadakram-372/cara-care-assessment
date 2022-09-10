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
      if (action.payload.action === "add") {
        state.favouritesData = [...state.favouritesData, action.payload.item];
      } else {
        state.favouritesData = state.favouritesData.filter(
          (obj) => obj?.id !== action.payload.item.id
        );
      }
    },
  },
});

export const { setDataViewType, setFavouritesData } =
  persistReducerSlice.actions;
export default persistReducerSlice.reducer;
