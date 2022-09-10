import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";

// Libraries
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// Images
import Images from "../../../assets/images";

// Constants
import {
  HOME_SCREEN_CONSTANTS,
  VIEW_TYPE_CONSTANTS,
} from "../../constants/Strings";

// Routes
import { CHARACTER_END_POINT } from "../../constants/routes";

// Icons
import Entypo from "react-native-vector-icons/Entypo";

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
import GridView from "../../components/grid-view";
import headerRight from "../../components/headers/header-right";
import { setDataViewType } from "../../redux/reducers/PersistReducer";
import spacing from "../../theme/spacing";

function HomeScreen({ navigation }) {
  // useDispatch
  const dispatch = useDispatch();

  // useSelector
  const { loader, errorFetchingData, characterData } = useSelector(
    (state) => state.AppReducer
  );
  const { viewType } = useSelector((state) => state.PersistReducer);

  // States
  const [pageIndex, setPageIndex] = useState(1);
  const [searchBarText, setSearchBarText] = useState("");
  const [searchBarError, setSearchBarError] = useState({
    status: false,
    text: "",
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        headerRight({
          navigation,
          viewType,
          onClick: () => {
            viewType === VIEW_TYPE_CONSTANTS.LIST
              ? dispatch(setDataViewType(VIEW_TYPE_CONSTANTS.GRID))
              : dispatch(setDataViewType(VIEW_TYPE_CONSTANTS.LIST));
          },
          iconTextView: () => {
            return viewType === VIEW_TYPE_CONSTANTS.LIST ? (
              <>
                <Entypo size={32} name="grid" style={styles.icon_style} />
                <Text style={styles.text_style}>
                  {VIEW_TYPE_CONSTANTS.GRID}
                </Text>
              </>
            ) : (
              <>
                <Entypo size={32} name="list" style={styles.icon_style} />
                <Text style={styles.text_style}>
                  {VIEW_TYPE_CONSTANTS.LIST}
                </Text>
              </>
            );
          },
        }),
    });
  }, [viewType]);

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
        {viewType === VIEW_TYPE_CONSTANTS.LIST ? (
          <ListView
            data={characterData}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            dispatch={dispatch}
            searchBarText={searchBarText}
            loader={loader}
          />
        ) : (
          <GridView
            data={characterData}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            dispatch={dispatch}
            searchBarText={searchBarText}
            loader={loader}
            viewType={viewType}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
