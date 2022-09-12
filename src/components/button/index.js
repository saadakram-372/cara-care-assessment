import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

// Colors
import colors from "../../theme/colors";

// Spacing
import spacing from "../../theme/spacing";

function Button(props) {
  const { text, onPress, disabled, button_style } = props;
  return (
    <TouchableOpacity
      disabled={disabled ? true : false}
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, button_style]}
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
