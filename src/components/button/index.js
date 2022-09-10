import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";

function Button(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.button_text_style}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    paddingVertical: spacing.medium,
    borderRadius: spacing.smaller,
  },
  button_text_style: {
    color: colors.darkBlue,
    fontWeight: "500",
    fontSize: 16,
  },
});

export default Button;
