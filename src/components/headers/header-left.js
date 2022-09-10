import React from "react";
import { Image, StyleSheet } from "react-native";

// Images
import Images from "../../../assets/images";
import colors from "../../theme/colors";

// Spacing
import spacing from "../../theme/spacing";

function HeaderLeft() {
  return <Image source={Images.logo} style={styles.logo_style} />;
}

const styles = StyleSheet.create({
  logo_style: {
    width: 40,
    height: 40,
    marginLeft: spacing.smaller,
    alignSelf: "center",
    tintColor: colors.black,
  },
});

export default HeaderLeft;
