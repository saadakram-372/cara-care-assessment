import React from "react";

// Libraries
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import SplashScreen from "../screens/splash";

// Bottom tab
import TabBar from "./bottom-tab";

const Stack = createStackNavigator();

const CardOptions = {
  cardStyle: { backgroundColor: "transparent" },
  gestureEnabled: false,
  cardOverlayEnabled: true,
};

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={CardOptions}
      />
      <Stack.Screen name="bottomTab" component={TabBar} options={CardOptions} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
