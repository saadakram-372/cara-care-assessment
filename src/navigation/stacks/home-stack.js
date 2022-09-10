import React from "react";

// Libraries
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../../screens/home";
import DetailsScreen from "../../screens/details";
import FilterScreen from "../../screens/filter";
import HeaderLeft from "../../components/headers/header-left";
import headerRight from "../../components/headers/header-right";
import colors from "../../theme/colors";

const HomeStack = createStackNavigator();

const CardOptions = {
  cardStyle: { backgroundColor: "transparent" },
  headerShown: false,
};

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          cardStyle: { backgroundColor: "transparent" },
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            shadowColor: "transparent",
          },
          headerTitleStyle: { fontWeight: "500", fontSize: 18 },
          headerTitleAlign: "center",
          headerTitle: "",
          headerLeft: () => HeaderLeft(),
          headerRight: () => headerRight({ navigation }),
        })}
      />

      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={CardOptions}
      />

      <HomeStack.Screen
        name="Filter"
        component={FilterScreen}
        options={CardOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
