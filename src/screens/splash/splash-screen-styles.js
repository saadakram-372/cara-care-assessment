import { StyleSheet } from "react-native";

// Colors
import colors from "../../theme/colors";

// Spacing
import spacing from "../../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: "center",
    padding: spacing.mediumPlus,
  },
  logo_style: {
    height: 150,
    width: 150,
    alignSelf: "center",
    tintColor: colors.white,
  },
  title_style: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 24,
    textAlign: "center",
  },
  desc_style: {
    color: colors.grey,
    fontWeight: "300",
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 45,
  },
});
