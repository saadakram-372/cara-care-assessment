import React from "react";
import { StyleSheet, View } from "react-native";

// Libraries
import { ActivityIndicator } from "react-native-paper";

// Colors
import colors from "../../theme/colors";

// Utils
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils";

function Indicator({ state }) {
  return state ? (
    <View style={styles.background_dark_overlay}>
      <ActivityIndicator
        size={32}
        animating={state}
        hidesWhenStopped={true}
        color={colors.white}
        style={styles.activity_indicator_style}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  background_dark_overlay: {
    // flex: 1,
    position: "absolute",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: colors.black,
    zIndex: 50,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
  },
  activity_indicator_style: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 16,
    zIndex: 100,
  },
});

export default Indicator;
