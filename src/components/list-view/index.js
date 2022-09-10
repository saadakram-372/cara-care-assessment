import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

// Libraries
import FastImage from "react-native-fast-image";

// Images
import Images from "../../../assets/images";

// Colors
import colors from "../../theme/colors";

// Components
import Pagination from "../pagination";
import FlatListComponent from "../flat-list";
import VerticalDivider from "../dividers/vertical-divider";
import spacing from "../../theme/spacing";

function ListView(props) {
  const { data, pageIndex, setPageIndex, dispatch, searchBarText, loader } =
    props;

  /**
   * Function when an item from the list view is clicked
   * @param {object} item
   * @param {number} index
   * @returns
   */
  const onClickedItem = ({ item, index }) => {
    console.log("clicked: ", item, " with index: ", index);
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
          resizeMode="stretch"
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
              <Text style={styles.title_style}>Name: {title}</Text>
            ) : (
              <View style={{ marginTop: 8 }}></View>
            )}

            {/* Subtitle */}
            <Text style={styles.sub_title_style}>
              Episode: {first_seen_episode}
            </Text>
          </View>

          {/* Bottom icon view */}
          <View style={styles.bottom_icon_view_style}>
            {/* First column */}
            <View style={styles.icon_text_view_style}>
              <Image source={Images.status} style={styles.icon_style} />
              <Text style={styles.icon_text_style}>{status}</Text>
            </View>

            {/* Vertical divider */}
            <VerticalDivider
              backgroundColor="#FFFFFF33"
              width={2}
              height={24}
            />

            {/* Second column */}
            <View style={styles.icon_text_view_style}>
              <Image source={Images.location} style={styles.icon_style} />
              <Text style={styles.icon_text_style}>{location.name}</Text>
            </View>

            {/* Vertical divider */}
            <VerticalDivider
              backgroundColor="#FFFFFF33"
              width={2}
              height={24}
            />

            {/* Third column */}
            <View style={styles.icon_text_view_style}>
              <Image source={Images.specie} style={styles.icon_style} />
              <Text style={styles.icon_text_style}>{species}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {/* Pagination */}
      {searchBarText.length === 0 ? (
        <Pagination
          currentPage={pageIndex}
          totalPages={data?.info?.pages}
          next={data?.info?.next}
          previous={data?.info?.prev}
          setPageIndex={setPageIndex}
          dispatch={dispatch}
        />
      ) : null}

      {/* List View */}
      <View
        style={styles.flat_list_view_style(
          searchBarText.length == 0 ? spacing.headerHidden : 0
        )}
      >
        <FlatListComponent
          data={data?.results}
          listEmptyText={loader ? " " : "No data found"}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list_item_view: {
    marginTop: spacing.mediumPlus,
  },
  flat_list_view_style: (marginBottom) => ({
    marginTop: spacing.mediumPlus,
    marginBottom: marginBottom,
  }),
  image_background_style: {
    height: 200,
    width: "100%",
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
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    bottom: spacing.none,
    marginBottom: spacing.mediumPlus,
    zIndex: 1,
    paddingHorizontal: spacing.mediumPlus,
  },
  icon_style: {
    marginBottom: spacing.smaller,
    marginRight: spacing.smaller,
    width: 16,
    height: 16,
    tintColor: colors.white,
  },
  icon_text_view_style: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  icon_text_style: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
  },
});

export default ListView;
