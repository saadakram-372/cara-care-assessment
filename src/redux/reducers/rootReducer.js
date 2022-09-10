import { combineReducers } from "redux";

// Reducers
import AppReducer from "./AppReducer";
import PersistReducer from "./PersistReducer";

export default combineReducers({
  AppReducer,
  PersistReducer,
});
