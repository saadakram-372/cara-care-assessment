import React from "react";
import { View, StyleSheet } from "react-native";

// Colors
import colors from "../../theme/colors";

function BlackOverlay() {
  return <View styles={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    opacity: 0.3,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: colors.black,
  },
});

export default BlackOverlay;
