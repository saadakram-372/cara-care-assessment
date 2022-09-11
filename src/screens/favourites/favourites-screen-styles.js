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
    paddingHorizontal: spacing.smaller,
    marginBottom: spacing.huge,
  },
});
