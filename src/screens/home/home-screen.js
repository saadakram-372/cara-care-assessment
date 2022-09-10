import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";

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
import { useDispatch } from "react-redux";
import { getCharacterData } from "../../redux/thunks/appThunk";

// Components
import TextInput from "../../components/text-input";

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  // States
  const [searchBarText, setSearchBarText] = useState("");
  const [searchBarError, setSearchBarError] = useState({
    status: false,
    text: "",
  });

  useEffect(() => {
    // Api call to get rick and morty data
    dispatch(getCharacterData()).then((value) => {
      console.log("value: ", value);
    });
  }, []);

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
      {/* Search Bar */}
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
            console.log("icon pressed");
          }
        }}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
