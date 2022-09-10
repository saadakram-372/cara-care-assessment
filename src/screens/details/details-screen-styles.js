import { StyleSheet } from "react-native";

// Libraries
import { ifIphoneX } from "react-native-iphone-x-helper";

// Colors
import colors from "../../theme/colors";

// Spapcing
import spacing from "../../theme/spacing";

// Utils
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  close_icon_style: {
    paddingTop: spacing.hugePlus,
  },
  close_icon_title_view_style: {
    position: "absolute",
    right: spacing.smaller,
    zIndex: 100,
  },
  image_background_style: {
    flex: 0.4,
    width: SCREEN_WIDTH,
  },
  black_overlay: {
    width: "100%",
    height: "120%",
    backgroundColor: colors.black,
    opacity: 0.7,
    alignSelf: "center",
    position: "absolute",
    zIndex: 100,
  },
  bottom_view_style: {
    flex: 0.7,
    borderRadius: spacing.large,
    paddingTop: spacing.mediumPlus,
    backgroundColor: colors.darkBlue,
  },
  title_style: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
    color: colors.white,
    marginBottom: spacing.hugePlus,
  },
  info_text_view_style: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: spacing.mediumPlus,
  },
  text_style: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 14,
    flexShrink: 1,
  },
  scroll_view_styles: {
    height: "50%",
    marginBottom: "20%",
  },
  button_view_style: {
    width: "90%",
    position: "absolute",
    bottom: spacing.large,
    backgroundColor: colors.darkBlue,
    alignSelf: "center",
  },
});
