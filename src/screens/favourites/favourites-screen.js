import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";

// Libraries
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useFocusEffect } from "@react-navigation/native";

// Images
import Images from "../../../assets/images";

// Constants
import { VIEW_TYPE_CONSTANTS } from "../../constants/Strings";

// Routes
import { CHARACTER_END_POINT } from "../../constants/routes";

// Redux
import { useSelector } from "react-redux";

// Icons
import Entypo from "react-native-vector-icons/Entypo";

// Colors
import colors from "../../theme/colors";

// Styles
import { styles } from "./favourites-screen-styles";

// Components
import ListView from "../../components/list-view";
import GridView from "../../components/grid-view";

function FavouritesScreen({ navigation }) {
  const { favouritesData, viewType } = useSelector(
    (state) => state.PersistReducer
  );

  return (
    <View style={styles.container}>
      {viewType === VIEW_TYPE_CONSTANTS.LIST ? (
        <ListView
          data={favouritesData}
          searchBarText={""}
          navigation={navigation}
          loader={false}
        />
      ) : (
        <GridView
          data={favouritesData}
          searchBarText={""}
          loader={false}
          viewType={viewType}
          navigation={navigation}
        />
      )}
    </View>
  );
}

export default FavouritesScreen;
