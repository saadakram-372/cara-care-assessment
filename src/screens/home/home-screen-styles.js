import { StyleSheet } from "react-native";

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
  data_view_style: {
    flex: 0.85,
  },
  error_fetching_data_style: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "center",
    marginTop: spacing.textMidScreen,
    color: colors.burntUmber,
  },
});
