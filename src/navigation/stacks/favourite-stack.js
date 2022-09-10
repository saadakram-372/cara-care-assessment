import React from "react";

// Libraries
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import DetailsScreen from "../../screens/details";
import FavouritesScreen from "../../screens/favourites";

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
        options={CardOptions}
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
