import React from "react";
import { Image, View, StyleSheet } from "react-native";

// Libraries
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Stacks
import FavouriteStackScreens from "./stacks/favourite-stack";
import HomeStackScreens from "./stacks/home-stack";

// Icons
import Entypo from "react-native-vector-icons/Entypo";
import colors from "../theme/colors";
import HeaderLeft from "../components/headers/header-left";

/**
 * Function to hide/show bottom tab on different screens based upon the usage. If the function return
 * false, hide the bottom tab and if it return true, show the bottom tab.
 * @param {object} route
 * @returns {boolean}
 */
const getTabBarVisibility = (route) => {
  // Extracting the name of the screen from the entire route object
  const routeName = getFocusedRouteNameFromRoute(route)
    ? getFocusedRouteNameFromRoute(route)
    : "";

  // If-Else statements to hide-show bottom tab for specific screens
  if (routeName === "Details") {
    return false;
  } else if (routeName === "Favourites") {
    return false;
  } else if (routeName === "Filter") {
    return false;
  } else {
    return true;
  }
};

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelPosition: "below-icon",
        keyboardHidesTabBar: true,
        activeTintColor: colors.white,
        inactiveTintColor: colors.greySuit,
        labelStyle: styles.bottom_tab_label_style,
        style: styles.bottom_tab_style,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreens}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.bottomTabView}>
              {/* Home Icon */}
              <Entypo
                name="home"
                size={24}
                color={focused ? colors.white : colors.greySuit}
              />
            </View>
          ),
          headerLeft: () => HeaderLeft(),
        })}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouriteStackScreens}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          title: "Favourites",
          tabBarIcon: ({ focused }) => (
            <View style={styles.bottomTabView}>
              {/* Favourites Icon */}
              <Entypo
                name="heart"
                size={24}
                color={focused ? colors.white : colors.greySuit}
              />
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottom_tab_label_style: {
    fontSize: 12,
  },
  bottom_tab_style: {
    backgroundColor: colors.darkBlue,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    elevation: 0,
    borderTopColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabBar;
