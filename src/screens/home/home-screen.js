import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";

// Libraries
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// Images
import Images from "../../../assets/images";

// Constants
import { HOME_SCREEN_CONSTANTS } from "../../constants/Strings";

// Routes
import { BASE_URL, CHARACTER_END_POINT } from "../../constants/routes";

// Colors
import colors from "../../theme/colors";

// Styles
import { styles } from "./home-screen-styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getCharacterData } from "../../redux/thunks/AppThunk";

// Components
import ListView from "../../components/list-view";
import ActivityIndicator from "../../components/activity-indicator";
import SearchBar from "../../components/search-bar";
import Pagination from "../../components/pagination";

function HomeScreen({ navigation }) {
  // useDispatch
  const dispatch = useDispatch();

  // useSelector
  const { loader, errorFetchingData, characterData } = useSelector(
    (state) => state.AppReducer
  );

  // States
  const [pageIndex, setPageIndex] = useState(1);
  const [searchBarText, setSearchBarText] = useState("");
  const [searchBarError, setSearchBarError] = useState({
    status: false,
    text: "",
  });

  useEffect(() => {
    // Api call to get rick and morty data
    dispatch(
      getCharacterData({
        end_point: `${CHARACTER_END_POINT}?page=${pageIndex}`,
      })
    );
  }, [pageIndex]);

  useEffect(() => {
    if (searchBarText.length !== 0) {
      searchItem();
    } else {
      // Api call to get rick and morty data
      dispatch(
        getCharacterData({
          end_point: `${CHARACTER_END_POINT}?page=${pageIndex}`,
        })
      );
    }
  }, [searchBarText]);

  /**
   * Function to reset the search bar error values
   */
  const resetSearchBarError = () => {
    setSearchBarError({
      status: false,
      text: "",
    });
  };

  /**
   * Function to search item from the character data when user clicks the search icon
   */
  const searchItem = () => {
    // Api call to get rick and morty data searched upon the name
    // this function searches character-wise (order of the character doesn't matter)
    dispatch(
      getCharacterData({
        end_point: `${CHARACTER_END_POINT}?name=${searchBarText.toString()}`,
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Loader */}
      <ActivityIndicator state={loader} />

      {/* Search Bar */}
      <View style={styles.search_view_style}>
        <SearchBar
          searchItem={searchItem}
          searchBarText={searchBarText}
          searchBarError={searchBarError}
          setSearchBarText={setSearchBarText}
          setSearchBarError={setSearchBarError}
          resetSearchBarError={resetSearchBarError}
        />
      </View>

      {/* List or Grid (based upon user's selection) of data */}
      <View style={styles.data_view_style(useBottomTabBarHeight())}>
        {/* Error fetching data */}
        {errorFetchingData && errorFetchingData.length !== 0 ? (
          <Text style={styles.error_fetching_data_style}>
            {errorFetchingData}
          </Text>
        ) : null}

        {/* Pagination */}
        {searchBarText.length === 0 ? (
          <Pagination
            currentPage={pageIndex}
            totalPages={characterData?.info?.pages}
            next={characterData?.info?.next}
            previous={characterData?.info?.prev}
            setPageIndex={setPageIndex}
            dispatch={dispatch}
          />
        ) : null}

        {/* List View */}
        <ListView
          data={characterData}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          dispatch={dispatch}
          searchBarText={searchBarText}
          loader={loader}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
