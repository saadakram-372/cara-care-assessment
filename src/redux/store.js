import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducers from "./reducers/rootReducer";

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
