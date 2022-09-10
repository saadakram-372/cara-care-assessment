import React from "react";
import { StyleSheet } from "react-native";

// Libraries
import { ActivityIndicator } from "react-native-paper";
import colors from "../../theme/colors";

function Indicator({ state }) {
  return (
    <ActivityIndicator
      size={32}
      animating={state}
      hidesWhenStopped={true}
      color={colors.darkBlue}
      style={styles.activity_indicator_style}
    />
  );
}

const styles = StyleSheet.create({
  activity_indicator_style: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 16,
  },
});

export default Indicator;
