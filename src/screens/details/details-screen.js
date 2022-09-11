import React from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";

// Libraries
import SimpleToast from "react-native-simple-toast";

// Constants
import { DETAILS_SCREEN_CONSTANTS } from "../../constants/Strings";

// Icons
import AntDesign from "react-native-vector-icons/AntDesign";

// Styles
import { styles } from "./details-screen-styles";

// Components
import GetCharacterDetails from "./components/details-row-info";

// Colors
import colors from "../../theme/colors";
import Button from "../../components/button";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setFavouritesData } from "../../redux/reducers/PersistReducer";

function DetailsScreen({ navigation, route }) {
  const { item } = route?.params;
  const dispatch = useDispatch();

  const { favouritesData } = useSelector((state) => state.PersistReducer);

  /**
   * Function when a user wants to add a character to favourites
   */
  const onClickAddToFavourites = ({ item }) => {
    // Adding object (item) to array in redux persist if not already present, remove if already present.
    const find_current_object = favouritesData.find(
      (obj) => obj?.id === item.id
    );

    if (favouritesData.length !== 0 && find_current_object !== undefined) {
      dispatch(setFavouritesData({ item, action: "remove" }));
      SimpleToast.show("Character removed from your favourites");
    } else {
      dispatch(setFavouritesData({ item, action: "add" }));
      SimpleToast.show("Character added to your favourites");
    }
  };

  return (
    <View style={styles.container}>
      {/* Close Icon */}
      <View style={styles.close_icon_title_view_style}>
        {/* Close Icon */}
        <AntDesign
          name="close"
          size={32}
          color={colors.white}
          style={styles.close_icon_style}
          onPress={() => navigation.pop()}
        />
      </View>

      <ImageBackground
        resizeMode="stretch"
        style={styles.image_background_style}
        source={{ uri: item?.image }}
      >
        {/* Overlay to make the frost container of icon a bit more dark */}
        <View style={styles.black_overlay} />
      </ImageBackground>

      {/* Bottom Container */}
      <View style={styles.bottom_view_style}>
        <ScrollView style={styles.scroll_view_styles}>
          {/* Details screen title */}
          <Text style={styles.title_style}>
            {DETAILS_SCREEN_CONSTANTS.TITLE}
          </Text>

          {/* Name */}
          <GetCharacterDetails title={"Name"} value={item?.name} />

          {/* Status */}
          <GetCharacterDetails title={"Status"} value={item?.status} />

          {/* Specie */}
          <GetCharacterDetails title={"Species"} value={item?.species} />

          {/* Gender */}
          <GetCharacterDetails title={"Gender"} value={item?.gender} />

          {/* Origin location */}
          <GetCharacterDetails
            title={"Origin Location"}
            value={item?.origin?.name || "Unknown"}
          />

          {/* Last known location */}
          <GetCharacterDetails
            title={"Last Known Location"}
            value={item?.location?.name || "Unknown"}
          />

          {/* Number of episodes */}
          <GetCharacterDetails
            title={"Number of Episodes"}
            value={item?.episode?.length}
          />

          {/* First seen episode */}
          <GetCharacterDetails
            title={"First Seen Episode"}
            value={item?.episode[0]}
          />

          {/* Last seen episode */}
          <GetCharacterDetails
            title={"Last Seen Episode"}
            value={item?.episode[item?.episode?.length - 1]}
          />
        </ScrollView>

        {/* Button View */}
        <View style={styles.button_view_style}>
          {/* Button */}
          <Button
            text={
              favouritesData.length !== 0 &&
              favouritesData.find((obj) => obj?.id === item.id) !== undefined
                ? "Remove from favourites"
                : "Add to Favourites"
            }
            onPress={() => onClickAddToFavourites({ item })}
          />
        </View>
      </View>
    </View>
  );
}

export default DetailsScreen;
