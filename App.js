import React from "react";
import { Text, StatusBar } from "react-native";

// Redux
import reduxStore from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Libaries
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

// App Navigator
import AppNavigator from "./src/navigation";

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};
const App = () => {
  const { store, persistor } = reduxStore();

  // This line stops device OS from changing the default text size set by the developer in the app.
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  // Making statusBar transparent so that screen look like full size
  <StatusBar translucent backgroundColor="transparent" />;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default App;
