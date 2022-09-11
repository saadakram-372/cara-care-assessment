import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";

// Libraries
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["AppReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);

  return { store, persistor };
};
