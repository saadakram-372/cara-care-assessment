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
