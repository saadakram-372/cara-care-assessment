import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";

// Libraries
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Images
import Images from "../../../assets/images";

// Constants
import { HOME_SCREEN_CONSTANTS } from "../../constants/Strings";

// Colors
import colors from "../../theme/colors";

// Styles
import { styles } from "./home-screen-styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getCharacterData } from "../../redux/thunks/appThunk";

// Components
import ListView from "../../components/list-view";
import TextInput from "../../components/text-input";
import ActivityIndicator from "../../components/activity-indicator";

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
    dispatch(getCharacterData({ pageIndex }));
  }, [pageIndex]);

  /**
   * Function to reset the search bar error values
   */
  const resetSearchBarError = () => {
    setSearchBarError({
      status: false,
      text: "",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Loader */}
      <ActivityIndicator state={loader} />

      {/* Search Bar */}
      <View style={styles.search_view_style}>
        <TextInput
          showErrorMsg={true}
          mode="outlined"
          text={searchBarText}
          error={searchBarError}
          label={HOME_SCREEN_CONSTANTS.SEARCH_BAR_LABEL}
          onChangeText={(value) => {
            resetSearchBarError();
            setSearchBarText(value.toString());
          }}
          placeholder={HOME_SCREEN_CONSTANTS.SEARCH_BAR_PLACEHOLER}
          rightIcon={() => <FontAwesome name="search" size={24} />}
          rightIconPressed={() => {
            if (searchBarText.length === 0) {
              setSearchBarError({
                status: true,
                text: HOME_SCREEN_CONSTANTS.SEARCH_BAR_ERROR_TEXT,
              });
            } else {
              // TODO
              // Search from the data
              resetSearchBarError();
            }
          }}
        />
      </View>

      {/* List or Grid (based upon user's selection) of data */}
      <View style={styles.data_view_style}>
        <ScrollView bounces={true}>
          {/* Error fetching data */}
          {errorFetchingData && errorFetchingData.length !== 0 ? (
            <Text style={styles.error_fetching_data_style}>
              {errorFetchingData}
            </Text>
          ) : null}

          {/* List View */}
          <ListView
            data={characterData}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
