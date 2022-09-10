import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";

// Libraries
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useFocusEffect } from "@react-navigation/native";

// Images
import Images from "../../../assets/images";

// Constants
import {
  HOME_SCREEN_CONSTANTS,
  VIEW_TYPE_CONSTANTS,
} from "../../constants/Strings";

// Routes
import { CHARACTER_END_POINT } from "../../constants/routes";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Icons
import Entypo from "react-native-vector-icons/Entypo";

// Colors
import colors from "../../theme/colors";

// Components
import ListView from "../../components/list-view";
import Pagination from "../../components/pagination";
import { styles } from "./favourites-screen-styles";
import ActivityIndicator from "../../components/activity-indicator";

function FavouritesScreen({ navigation }) {
  const dispatch = useDispatch();
  const { favouritesData } = useSelector((state) => state.PersistReducer);

  // States
  const [pageIndex, setPageIndex] = useState(1);
  const [data, setData] = useState({
    results: [],
  });

  // useEffect(() => {
  //   setData({ ...data, results: favouritesData });
  // }, []);

  return (
    // List or Grid (based upon user's selection) of data
    <View style={styles.container}>
      {/* Pagination */}
      {/* {favouritesData.length !== 0 ? (
        <Pagination
          currentPage={pageIndex}
          totalPages={favouritesData?.info?.pages}
          next={favouritesData?.info?.next}
          previous={favouritesData?.info?.prev}
          setPageIndex={setPageIndex}
        />
      ) : null} */}

      {/* List View */}
      <ListView
        data={favouritesData}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        dispatch={dispatch}
        searchBarText={[]}
        navigation={navigation}
        loader={false}
      />
    </View>
  );
}

export default FavouritesScreen;
