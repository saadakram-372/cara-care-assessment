import React from "react";
import { StyleSheet, Text } from "react-native";

// Libraries
import { TextInput } from "react-native-paper";

// Colors
import colors from "../../theme/colors";

// Spacing
import spacing from "../../theme/spacing";

function Input(props) {
  const {
    text,
    mode,
    label,
    error,
    rightIcon,
    placeholder,
    showErrorMsg,
    onChangeText,
    rightIconPressed,
  } = props;

  return (
    <>
      <TextInput
        mode={mode}
        value={text}
        error={error.status}
        label={label}
        autoCorrect={false}
        autoComplete={false}
        autoCapitalize="none"
        placeholder={placeholder}
        onChangeText={onChangeText}
        right={<TextInput.Icon name={rightIcon} onPress={rightIconPressed} />}
      />

      {showErrorMsg ? <Text style={styles.errorText}>{error.text}</Text> : null}
    </>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: colors.burntUmber,
    fontWeight: "400",
    fontStyle: "italic",
    textAlign: "left",
    fontSize: 12,
    marginTop: spacing.tiny,
  },
});

export default Input;
