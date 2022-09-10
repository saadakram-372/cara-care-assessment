import { StyleSheet } from "react-native";

// Libraries
import { ifIphoneX } from "react-native-iphone-x-helper";

// Colors
import colors from "../../theme/colors";

// Spapcing
import spacing from "../../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacing.headerHidden,
    paddingHorizontal: spacing.medium,
  },
  image_backgroud_style: {
    width: "100%",
    height: "100%",
  },
  search_view_style: {
    flex: 0.15,
  },
  data_view_style: (bottomTabBarHeight) => ({
    flex: 0.85,
    marginBottom: 32,
    ...ifIphoneX(
      {
        marginBottom: bottomTabBarHeight - 32,
      },
      {
        marginBottom: bottomTabBarHeight,
      }
    ),
  }),
  error_fetching_data_style: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "center",
    marginTop: spacing.textMidScreen,
    color: colors.burntUmber,
  },
});
