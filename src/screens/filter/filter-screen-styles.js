import { StyleSheet } from "react-native";

// Libraries
import { ifIphoneX } from "react-native-iphone-x-helper";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

// Colors
import colors from "../../theme/colors";

// Spapcing
import spacing from "../../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.headerHidden,
    paddingHorizontal: spacing.mediumPlus,
    backgroundColor: colors.darkBlue,
  },
  close_icon_title_view_style: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.hugePlus,
  },
  close_icon_style: {
    position: "absolute",
    left: 0,
  },
  title_style: {
    fontWeight: "500",
    fontSize: 24,
    color: colors.white,
    textAlign: "center",
  },
  section_title_divider_view_style: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section_title_style: {
    color: colors.silverChalice,
    fontSize: 14,
    fontWeight: "400",
  },
  section_details_view_style: {
    marginTop: spacing.huge,
  },
  section_text_style: {
    color: colors.white,
    marginBottom: spacing.medium,
  },
  text_check_box_view_style: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button_view_style: {
    width: "100%",
    position: "absolute",
    bottom: spacing.hugePlus,
    alignSelf: "center",
  },
});
