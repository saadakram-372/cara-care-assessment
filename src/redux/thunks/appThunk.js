import { createAsyncThunk } from "@reduxjs/toolkit";

// Routes
import { BASE_URL, CHARACTER_END_POINT } from "../../constants/routes";

// Api Service
import { apiGet } from "../../services/apiCalls";

// Login api call
export const getCharacterData = createAsyncThunk(
  "AuthThunk/getCharacterData",
  async (payload) => {
    // Updating the end point by appending the page number
    const updated_End_point = `${CHARACTER_END_POINT}?page=${payload.pageIndex}`;

    const response = await apiGet(BASE_URL, updated_End_point);
    return await response.json();
  }
);
