import { createAsyncThunk } from "@reduxjs/toolkit";

// Routes
import { BASE_URL, CHARACTER_END_POINT } from "../../constants/routes";

// Api Service
import { apiGet } from "../../services/apiCalls";

// Login api call
export const getCharacterData = createAsyncThunk(
  "AuthThunk/getCharacterData",
  async () => {
    const response = await apiGet(BASE_URL, CHARACTER_END_POINT);
    return await response.json();
  }
);
