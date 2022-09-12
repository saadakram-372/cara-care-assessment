/**
 * This is a middleware that uses thunks for the api calls. The getCharacterData thunk function here is used to fetch
 * the initial data from the end point and later helps us while searching and filtering data as well. All you need is to
 * pass the appropriate payload; having the appropriate endpoint/link to be appended with the BASE_URL.
 */

import { createAsyncThunk } from "@reduxjs/toolkit";

// Routes
import { BASE_URL } from "../../constants/routes";

// Api Service
import { apiGet } from "../../services/apiCalls";

// Login api call
export const getCharacterData = createAsyncThunk(
  "AuthThunk/getCharacterData",
  async (payload) => {
    // end point being sent based upon the need from the UI layer
    const updated_End_point = payload?.end_point;

    const response = await apiGet(BASE_URL, updated_End_point);
    return await response.json();
  }
);
