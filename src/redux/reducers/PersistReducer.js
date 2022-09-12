/**
 * This file has all of the reducers that are being used in the app and we need to persist their values.
 */

import { createSlice } from "@reduxjs/toolkit";

// Constants
import { VIEW_TYPE_CONSTANTS } from "../../constants/Strings";

export const persistReducerSlice = createSlice({
  name: "PersistReducer",
  initialState: {
    viewType: VIEW_TYPE_CONSTANTS.LIST,
    favouritesData: [],
    checkedFilter: {
      status: {
        Alive: false,
        Unknown: false,
        Dead: false,
      },
    },
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
    setCheckedFilter: (state, action) => {
      state.checkedFilter = {
        ...state.checkedFilter,
        status: {
          [action.payload.value]:
            !state.checkedFilter?.status[action.payload.value],
        },
      };
    },
    resetPersistValues: (state) => {
      state.checkedFilter = {
        status: {
          Alive: false,
          Unknown: false,
          Dead: false,
        },
      };
    },
  },
});

export const {
  setDataViewType,
  setFavouritesData,
  setCheckedFilter,
  resetPersistValues,
} = persistReducerSlice.actions;
export default persistReducerSlice.reducer;
