import React from "react";

// Libraries
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import DetailsScreen from "../../screens/details";
import FavouritesScreen from "../../screens/favourites";
import HeaderLeft from "../../components/headers/header-left";

const FavouriteStack = createStackNavigator();

const CardOptions = {
  cardStyle: { backgroundColor: "transparent" },
  headerShown: false,
};

const FavouriteStackScreens = () => {
  return (
    <FavouriteStack.Navigator initialRouteName="Favourites">
      <FavouriteStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={() => ({
          cardStyle: { backgroundColor: "transparent" },
          headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            shadowColor: "transparent",
          },
          headerTitleStyle: { fontWeight: "500", fontSize: 24 },
          headerTitleAlign: "center",
          headerTitle: "Favourites",
          headerLeft: () => null,
          headerRight: () => null,
        })}
      />

      <FavouriteStack.Screen
        name="Details"
        component={DetailsScreen}
        options={CardOptions}
      />
    </FavouriteStack.Navigator>
  );
};

export default FavouriteStackScreens;
