import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

// Images
import Images from "../../../assets/images";

// Colors
import colors from "../../theme/colors";

// Components
import FlatListComponent from "../flat-list";
import HorizontalDivider from "../dividers/horizontal-divider";

// Spacing
import spacing from "../../theme/spacing";

// Utils
import { SCREEN_WIDTH } from "../../utils";

// Constants
import { VIEW_TYPE_CONSTANTS } from "../../constants/Strings";

function GridView(props) {
  const { data, searchBarText, loader, viewType, navigation } = props;

  /**
   * Function when an item from the list view is clicked
   * @param {object} item
   * @param {number} index
   * @returns
   */
  const onClickedItem = ({ item }) => {
    navigation.navigate("Details", {
      item: item,
    });
  };

  /**
   * Function to render data in the form of a list for the flatList
   */
  const renderItem = ({ item, index }) => {
    const title = item?.name;
    const status = item?.status;
    const species = item?.species;
    const backgroundImage = item?.image;
    const first_seen_episode = item?.episode[0];
    const location = {
      name: item?.location?.name.split("(")[0],
    };

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.list_item_view}
        onPress={() => onClickedItem({ item, index })}
      >
        {/* Background Image */}
        <ImageBackground
          resizeMode="cover"
          imageStyle={{ borderRadius: 16 }}
          style={styles.image_background_style}
          source={{ uri: backgroundImage }}
        >
          {/* Adding a little dark shade to make text visible */}
          <View style={styles.overlay} />

          {/* Title + subtitle view */}
          <View style={styles.titleSubtitleView}>
            {/* Title */}
            {title ? (
              <Text style={styles.title_style}>{title}</Text>
            ) : (
              <View style={{ marginTop: 8 }}></View>
            )}
          </View>

          {/* Bottom icon view */}
          <View style={styles.bottom_icon_view_style}>
            {/* First column */}
            <View style={styles.icon_text_view_style}>
              <Image source={Images.status} style={styles.icon_style} />
              <Text style={styles.icon_text_style}>{status}</Text>
            </View>

            {/* Horizontal divider */}
            <HorizontalDivider
              width="100%"
              height={2}
              backgroundColor={colors.silverChalice}
            />

            {/* Second column */}
            <View style={styles.icon_text_view_style}>
              <Image source={Images.location} style={styles.icon_style} />
              <Text style={styles.icon_text_style}>{location.name}</Text>
            </View>

            {/* Horizontal divider */}
            <HorizontalDivider
              width="100%"
              height={2}
              backgroundColor={colors.silverChalice}
            />

            {/* Third column */}
            <View style={styles.icon_text_view_style}>
              <Image source={Images.specie} style={styles.icon_style} />
              <Text style={styles.icon_text_style}>{species}</Text>
            </View>

            {/* Horizontal divider */}
            <HorizontalDivider
              width="100%"
              height={2}
              backgroundColor={colors.silverChalice}
            />

            {/* Third column */}
            <View style={styles.icon_text_view_style}>
              <Text style={styles.icon_text_style}>{first_seen_episode}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {/* List View */}
      <View
        style={styles.flat_list_view_style(
          viewType === VIEW_TYPE_CONSTANTS.LIST && searchBarText.length == 0
            ? spacing.headerHidden
            : spacing.mediumPlus
        )}
      >
        <FlatListComponent
          data={data?.results}
          listEmptyText={loader ? " " : "No data found"}
          renderItem={renderItem}
          numCols={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list_item_view: {
    marginTop: spacing.mediumPlus,
    width: SCREEN_WIDTH / 3,
  },
  flat_list_view_style: (marginBottom) => ({
    marginTop: spacing.mediumPlus,
    marginBottom: marginBottom,
  }),
  image_background_style: {
    height: 280,
    width: SCREEN_WIDTH / 3.45,
    marginBottom: spacing.mediumPlus,
  },
  overlay: {
    opacity: 0.7,
    height: "100%",
    width: "100%",
    backgroundColor: "#000",
    borderRadius: spacing.mediumPlus,
  },
  titleSubtitleView: {
    alignSelf: "flex-start",
    position: "absolute",
  },
  title_style: {
    color: colors.white,
    fontWeight: "700",
    marginHorizontal: spacing.mediumPlus,
    marginTop: spacing.mediumPlus,
    marginBottom: spacing.smaller,
    fontSize: 16,
  },
  sub_title_style: {
    color: colors.white,
    fontWeight: "400",
    marginHorizontal: spacing.mediumPlus,
    marginBottom: spacing.mediumPlus,
    fontSize: 12,
    fontStyle: "italic",
  },
  bottom_icon_view_style: {
    width: "100%",
    position: "absolute",
    justifyContent: "space-between",
    bottom: spacing.none,
    zIndex: 1,
    paddingHorizontal: spacing.tiny,
  },
  icon_style: {
    marginRight: spacing.tiny,
    width: 16,
    height: 16,
    tintColor: colors.white,
    alignSelf: "center",
  },
  icon_text_view_style: {
    flexDirection: "row",
    alignItems: "center",
    margin: spacing.smaller,
  },
  icon_text_style: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 12,
    textAlign: "left",
    alignSelf: "center",
    width: "90%",
  },
});

export default GridView;
